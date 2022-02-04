/* quantidade de jogos que possuem a categoria ou o gênero 'ação' por desenvolvedora - avaliando as 10 primeiras */
SELECT developer AS `DESENVOLVEDORA`, COUNT(appid) AS `QUANTIDADE DE JOGOS DE AÇÃO` FROM steam
WHERE genres LIKE '%Action%' OR steamspy_tags LIKE '%Action%'
GROUP BY developer
ORDER BY COUNT(appid) DESC LIMIT 10;