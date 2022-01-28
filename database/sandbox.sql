SELECT COUNT(1) FROM insurance_data;

SELECT *
FROM insurance_data
WHERE smoker = 'yes';

SELECT smoker, COUNT(1) AS cnt
FROM insurance_data
GROUP BY smoker;

SELECT gender, SUM(charges) AS total_charges
FROM insurance_data
GROUP BY gender;

SELECT gender,smoker, SUM(charges) AS total_charges
FROM insurance_data
GROUP BY gender, smoker;

ALTER TABLE insurance_data
ADD COLUMN age_range VARCHAR(8);

UPDATE insurance_data
SET age_range = 
	CASE
	WHEN age < 20 THEN '< 20'
	WHEN age >= 20 AND age < 30 THEN '< 30'
	WHEN age >= 30 AND age < 40 THEN '< 40'
	WHEN age >= 40 AND age < 50 THEN '< 50'
	ELSE '> 50'
	END;

SELECT gender,age_range, SUM(charges) AS total_charges
FROM insurance_data
GROUP BY gender, age_range;

SELECT 'gender','age_range','total_charges'
UNION ALL
SELECT gender,age_range, SUM(charges) AS total_charges
INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/result.csv'
FROM insurance_data
GROUP BY gender, age_range;

SHOW VARIABLES LIKE '%secure%'

SET secure_file_priv = NULL

UPDATE mysql.user SET Super_Priv='Y' WHERE USER='root' AND HOST='%';

FLUSH PRIVILEGES;


SHOW GRANTS
