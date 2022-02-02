USE steam_store;

/*Qual o acumulado de downloads de acordo com o gênero? Selecione apenas os jogos com um único gênero.*/

SELECT sum(owners) as `DOWNLOADS`,
CASE
	WHEN genres LIKE 'Action'
		THEN 'Ação'
	WHEN genres LIKE 'Indie'
		THEN 'Independente'
	WHEN genres LIKE 'Strategy'
		THEN 'Estratégia'
	WHEN genres LIKE 'RPG'
		THEN 'Jogo de Representação'
	WHEN genres LIKE 'Casual'
		THEN 'Acessíveis ao Grande Público'
	WHEN genres LIKE 'Racing'
		THEN 'Corrida'
	WHEN genres LIKE 'Utilities'
		THEN 'Utilidades'
	WHEN genres LIKE 'Adventure'
		THEN 'Aventura'
	WHEN genres LIKE 'Web Publishing'
		THEN 'Publicados na Web'
	WHEN genres LIKE 'Simulation'
		THEN 'Simulação'
END AS `GÊNEROS` 
FROM steam WHERE genres NOT LIKE '%;%' 
AND owners <> 0 GROUP BY `GÊNEROS` ORDER BY `DOWNLOADS` DESC;
