USE steam_store;

/* quantidade de jogos no banco */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS` FROM steam;

/* nomes e preços dos jogos que se encaixam na consulta */
SELECT name AS `NOME DO JOGO`, positive_ratings AS `AVALIAÇÕES POSITIVAS`, price AS `PREÇO`,
CASE
	WHEN price > 0
		THEN 'Pago'
	WHEN price = 0
		THEN 'Gratuito'
	ELSE 'ERRO'
END AS `VALOR`
FROM steam
WHERE price < 4 &&
positive_ratings > (SELECT AVG(positive_ratings) FROM steam);

/* quantidade de jogos que se encaixam na consulta */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS DA CONSULTA`
FROM steam
WHERE price < 4 &&
positive_ratings > (SELECT AVG(positive_ratings) FROM steam);

