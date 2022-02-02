USE steam_store;

/*Quais desenvolvedoras acumulam as piores avaliações?*/

SELECT developer AS `DESENVOLVEDORA`, negative_ratings AS `AVALIAÇÕES NEGATIVAS`
FROM steam GROUP BY `DESENVOLVEDORA` ORDER BY `AVALIAÇÕES NEGATIVAS` DESC LIMIT 15;