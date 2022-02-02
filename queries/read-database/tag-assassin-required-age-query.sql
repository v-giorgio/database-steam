USE steam_store;

/*Quais jogos sem classificação mínima de idade possuem a tag "assassin" e qual o tempo médio dedicado à eles?*/

SELECT name AS `NOME`, required_age AS `IDADE MÍNIMA`, average_playtime AS `TEMPO MÉDIO` 
FROM steam 
INNER JOIN steamspy_tag_data
USING (appid)
WHERE steam.required_age = 0 && steamspy_tag_data.assassin <> 0;