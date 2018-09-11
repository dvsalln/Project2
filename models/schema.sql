### Schema

DROP DATABASE IF EXISTS friendify_db;

CREATE DATABASE friendify_db;

-- USE friendify_db;

<<<<<<< HEAD
CREATE TABLE friends
(
	id INT NOT NULL AUTO_INCREMENT,
    userImg LONGBLOB NULL,
	fName VARCHAR(255) NOT NULL,
    lName VARCHAR(255) NOT NULL,
	email VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(10) NOT NULL, 
    occupation VARCHAR(100) NOT NULL, 
    location VARCHAR(200) NOT NULL, 
    userSummary VARCHAR(255) NULL, 
    userInterests VARCHAR(255) NULL,
	PRIMARY KEY (id)
);
=======
-- CREATE TABLE friends
-- (
-- 	id INT NOT NULL AUTO_INCREMENT,
--     userImg LONGBLOB NULL
-- 	fName VARCHAR(255) NOT NULL,
--     lName VARCHAR(255) NOT NULL,
-- 	email VARCHAR(100) NOT NULL,
--     age INT NOT NULL,
--     gender VARCHAR(10) NOT NULL, 
--     occupation VARCHAR(100) NOT NULL, 
--     location VARCHAR(200) NOT NULL, 
--     userSummary VARCHAR(255) NULL, 
--     userInterests VARCHAR(255) NULL,
-- 	PRIMARY KEY (id)
-- );
>>>>>>> 29be34a36e54a2866b1abf2db53636bdf16686f5

-- INSERT INTO friends (fName, lName, email, age,
-- gender, occupation, location, userSummary, userInterests)
-- VALUES ("Nat", "Liu", "nat@gmail.com", 22, "Female", "Analyst", "San Francisco, USA", "Coding Bootcamp Student", "Boba");