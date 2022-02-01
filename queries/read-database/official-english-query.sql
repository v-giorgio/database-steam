-- 2º pergunta:  "Entre 2070 registros quantos jogos não possuem e possuem inglês como oficial e qual a média da avaliação positivas e negativas? 
SELECT english, COUNT(english), avg(positive_ratings) as media_avaliacao_positiva, 
avg(negative_ratings) as media_avaliacao_negativa from steam GROUP BY english ; -- comando O comando agrupa e conta quantos 
-- jogos tem o inglês como oficial e retorna também a média de avaliações positivas e negativas
