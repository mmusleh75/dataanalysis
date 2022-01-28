LOAD DATA LOCAL INFILE 'insurance.csv' 
INTO TABLE insurance_data
FIELDS TERMINATED BY ','
IGNORE 1 LINES
(age,gender,bmi,children,smoker,region,charges) ;



