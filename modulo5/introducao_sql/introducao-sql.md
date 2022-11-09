USE `introducao-sql`;

CREATE TABLE actors (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL, ##name não seria um termo reservado?
    salary FLOAT NOT NULL, ##FLOAT traz um valor aproximado
    birth_date DATE NOT NULL, ##DATE formato de data
    gender VARCHAR(6) NOT NULL ##NOT NULL o valor não pode ser nulo e deve ser preenchido
);

##SHOW DATABASES;
##SHOW TABLES;

DESCRIBE users;##mostra os campos, tipos de dado, se podem ser nulos, tipo de chave, padrão e informações extras


INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
##Erro código: 1062. Entrada duplicada '002' na chave 'PRIMÁRIA'

INSERT INTO actors (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
##Erro código: 1136. Número de colunas diferente da linha 1

INSERT INTO actors (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
##Erro código: 1364. Campo 'name' nãoo tem um valor padrão

INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
##Erro código: 1292. Valor de dado incorreto: "1950" para a coluna 'birth_date' na linha 1

INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

SELECT id, name from actors WHERE gender = "female"; ##retorna atrizes
SELECT salary from actors WHERE name = "Tony Ramos";
SELECT gender from actors WHERE gender = "invalid";
SELECT id, name, salary from actors WHERE salary > 500000;

SELECT id, nome from actors WHERE id = "002"; ##não há campo "nome"
SELECT * from actors WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM actors WHERE name NOT LIKE "A%" AND salary > 350000;
SELECT * FROM actors WHERE name LIKE "%g%" OR name LIKE "%G%";
SELECT * FROM actors WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL, 
    synopsis TEXT NULL,
    release_date DATE NOT NULL,
    rate TINYINT NULL
);

INSERT into movies values(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"
);

INSERT into movies values(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
"10"
);

INSERT into movies values(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);

SELECT id, name, rating from movies where id = "002";
SELECT * FROM movies WHERE name LIKE "%Flor%";
SELECT id, name, synopsis FROM movies WHERE rate > 7;
 
