/* RELAÇÕES SQL
A) Chave estrangeira é uma chave que pertence a outra tabela, mas é importada e usada na tabela atual.
*/

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

select * from Rating;
select * from MovieCast;
SET FOREIGN_KEY_CHECKS=1;
ALTER TABLE  movies DROP COLUMN  rating;
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (actor_id) REFERENCES actors(id)
);

SELECT * FROM movies 
INNER JOIN Rating ON movies.id = Rating.movie_id;

    INSERT INTO MovieCast (movie_id, actor_id)
    VALUES(
    		"002",
        "003"
    )