USE steam_store;

/* quantidade de jogos no banco */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS` FROM steam;

/* quantidade de jogos que possuem a categoria 'cross-platform' e a tag 'competitive' */
SELECT COUNT(A.name) AS `QUANTIDADE DE JOGOS DA CONSULTA` FROM steam AS A
INNER JOIN steamspy_tag_data AS B
ON A.appid = B.appid
WHERE A.categories LIKE '%cross-platform%'  && B.competitive > 0;

/* nome e preço do(s) jogo(s) que se encaixam na consulta anterior */
SELECT A.name AS `NOME DO JOGO`, A.price AS `PREÇO DO JOGO` FROM steam AS A
INNER JOIN steamspy_tag_data AS B
ON A.appid = B.appid
WHERE A.categories LIKE '%cross-platform%'  && B.competitive > 0;