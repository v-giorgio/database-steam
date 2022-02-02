/* quantidade de jogos (e seus nomes e preços) que possuem a categoria 'cross-platform' e a tag 'competitive' */
SELECT A.name AS `JOGO`, CONCAT('Preço: $ ', A.price) AS `PREÇO DO JOGO`, COUNT(A.name) AS `QUANTIDADE DE JOGOS DA CONSULTA` FROM steam AS A
INNER JOIN steamspy_tag_data AS B
ON A.appid = B.appid
WHERE A.categories LIKE '%cross-platform%'  && B.competitive > 0;