USE steam_store;

/*Quais jogos possuem descrição e a qual desenvolvedora pertencem?*/

SELECT name AS `NOME`, developer AS `DESENVOLVEDORA` 
FROM steam 
INNER JOIN steam_description_data 
ON appid = steam_appid 
ORDER BY `DESENVOLVEDORA` ;