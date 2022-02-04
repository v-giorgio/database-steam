/* quantidade de jogos que possuem website */
SELECT COUNT(A.appid) AS `QUANTIDADE DE JOGOS`,
CASE
    WHEN B.website <> ''
        THEN 'Possui website'
    WHEN B.website LIKE ''
        THEN 'Não possui website'
    ELSE 'Não possui website'
END AS `WEBSITE`
FROM steam AS A
INNER JOIN steam_support_info AS B
ON A.appid = B.steam_appid
GROUP BY
CASE
    WHEN B.website <> ''
        THEN 'Possui website'
    WHEN B.website LIKE ''
        THEN 'Não possui website'
    ELSE 'Não possui website'
END;