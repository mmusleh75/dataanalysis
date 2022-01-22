
DROP TABLE IF EXISTS `insurance`.`insurance_data`;

CREATE TABLE `insurance`.`insurance_data` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `age` INT DEFAULT NULL,
  `gender` VARCHAR(32) DEFAULT NULL,
  `bmi` DECIMAL(5,2) DEFAULT NULL,
  `children` INT DEFAULT NULL,
  `smoker` VARCHAR(4) DEFAULT NULL,
  `region` VARCHAR(32) DEFAULT NULL,
  `charges` DECIMAL(10,3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


SELECT COUNT(1) FROM insurance_data;