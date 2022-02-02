/* quantidade de jogos pelo preço menor que 4 reais com avaliações positivas acima da média */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS POR MENOS DE 4 DÓLARES`,
CASE
	WHEN positive_ratings > (SELECT AVG(positive_ratings) FROM steam)
		THEN 'Acima da média'
	WHEN price = 0
		THEN 'Abaixo da média'
	ELSE 'Abaixo da média'
END AS `AVALIAÇÕES POSITIVAS`
FROM steam
WHERE price < 4 GROUP BY `AVALIAÇÕES POSITIVAS`;
