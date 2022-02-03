--  3º pergunta: Jogos com email de suporte possuem mais avaliações positivas ou negativas?
SELECT count(steam_appid) AS quantidade_com_email FROM steam_support_info WHERE support_email <> ''; 
SELECT count(steam_appid) AS quantidade_sem_email FROM steam_support_info WHERE support_email = ''; 
-- Usado para saber o total de jogos com e-mail e sem e-mail

SELECT count(steam_appid), sum(steam.positive_ratings + steam.negative_ratings), sum(steam.positive_ratings) as soma_avaliacao_positiva, 
sum(steam.negative_ratings) AS soma_avaliacao_negativa FROM steam
INNER JOIN steam_support_info supp ON supp.steam_appid = steam.appid WHERE support_email <> ''
-- Faz uma validação nas duas tabelas e retorna a soma das avaliações positivas e negativas, o total da soma das avaliações positivas negativas e quantidade de jogos com e-mail de jogos que possuem email de suporte





