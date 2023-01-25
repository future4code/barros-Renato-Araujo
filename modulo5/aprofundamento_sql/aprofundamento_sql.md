 ## APROFUNDAMENTO SQL DIA 10/11/2022
 
ALTER TABLE actors ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE actors ADD type VARCHAR(255) DEFAULT "NotDirector";
ALTER TABLE actors CHANGE gender gender VARCHAR(100);
UPDATE actors SET name = "Moacyr Franco", age = 43 WHERE id = "003";
UPDATE actors SET name = "Mantor do Diabo", salary = "302983", birth_date = 1453-05-31, gender = "male", favorite_ice_cream_flavor = "lion", type = "Director" WHERE id = "005";
DELETE FROM actors WHERE name = "Tony Ramos";
DELETE FROM actors WHERE name = "Fernanda Montenegro";
DELETE FROM actors WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM actors;
SELECT MIN(salary) FROM actors WHERE gender = "female";
SELECT COUNT actors WHERE gender = "female";
SELECT SUM(salary) FROM actors;
SELECT name, id FROM actors ORDER BY name DESC;
SELECT * FROM actors WHERE gender = "female" ORDER BY salary ASC;
SELECT * FROM actors ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary), gender from actors GROUP BY gender;
ALTER TABLE movies ADD playing_limit_date DATE; 
ALTER TABLE movies CHANGE rate rating FLOAT;
UPDATE movies SET playing_limit_date = "2020-12-31" WHERE id = "001";
UPDATE movies SET playing_limit_date = "2023-12-31" WHERE id = "002";

