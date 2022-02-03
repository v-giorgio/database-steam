SELECT * FROM steam ORDER BY required_age desc; -- pesquisa realizada para entender os menores valores de idade depois de 0

-- 1º pergunta: Quantos jogos possuem a idade recomendada  de 7, 12 e 16 respectivamente? 

SELECT required_age, COUNT(required_age) FROM steam GROUP BY required_age
having required_age = 7 or required_age = 12 or required_age = 16 -- O comando agrupa e conta quantos jogos tem em cada idade recomenda e retorna a coluna de idade de 7,12,16 recomendada e quantos jogos tem cada uma


