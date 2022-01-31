USE steam_store;

/* quantidade de jogos no banco */
SELECT COUNT(appid) AS `QUANTIDADE DE JOGOS` FROM steam;

/* nome e website de informação dos jogos encontrados */
SELECT A.name AS `JOGO`, B.website AS `WEBSITE` FROM steam AS A
INNER JOIN steam_support_info AS B
ON A.appid = B.steam_appid
WHERE B.website <> '';

/* quantidade de jogos que possuem website */
SELECT COUNT(A.appid) AS `QUANTIDADE DE JOGOS COM WEBSITE` FROM steam AS A
INNER JOIN steam_support_info AS B
ON A.appid = B.steam_appid
WHERE B.website <> '';
