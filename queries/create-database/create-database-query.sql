CREATE DATABASE steam_store;

USE steam_store;

CREATE TABLE `steam` (
  `appid` INT PRIMARY KEY,
  `name` VARCHAR(150),
  `positive_ratings` INT,
  `price` FLOAT,
  `categories` VARCHAR(150),
  `developer` VARCHAR(150),
  `genres` VARCHAR(150),
  `negative_ratings` INT,
  `owners` VARCHAR(150),
  `required_age` INT,
  `average_playtime` INT,
  `english` TINYINT,
  `steamspy_tags` VARCHAR(150),
  `release_date` VARCHAR(50)
);

CREATE TABLE `steam_description_data` (
  `steam_appid` INT,
  `detailed_description` VARCHAR(750)
);

CREATE TABLE `steam_support_info` (
  `steam_appid` INT,
  `website` VARCHAR(150),
  `support_email` VARCHAR(150)
);

CREATE TABLE `steamspy_tag_data` (
  `appid` INT,
  `assassin` INT,
  `competitive` INT
);

ALTER TABLE `steam_description_data` ADD FOREIGN KEY (`steam_appid`) REFERENCES `steam` (`appid`);

ALTER TABLE `steam_support_info` ADD FOREIGN KEY (`steam_appid`) REFERENCES `steam` (`appid`);

ALTER TABLE `steamspy_tag_data` ADD FOREIGN KEY (`appid`) REFERENCES `steam` (`appid`);
