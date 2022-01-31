USE steam_store;

/* quantidade de jogos no banco */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS`
FROM steam;

/* nome e desenvolvedora de jogos que possuem a categoria ou o gênero 'ação' */
SELECT name, developer FROM steam
WHERE genres LIKE '%action%' OR steamspy_tags LIKE '%action%';

/* quantidade de jogos que possuem a categoria ou o gênero 'ação' por desenvolvedora */
SELECT  developer AS `DESENVOLVEDORA`, COUNT(appid) AS `QUANTIDADE DE JOGOS DE AÇÃO` FROM steam
WHERE genres LIKE '%action%' OR steamspy_tags LIKE '%action%'
GROUP BY developer
ORDER BY COUNT(appid) DESC;

/* quantidade total de jogos que possuem a categoria ou o gênero 'ação' */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS DE AÇÃO` FROM steam
WHERE genres LIKE '%action%' OR steamspy_tags LIKE '%action%';