/* Qual ano teve mais jogos lançados nos ultimos 10 anos?*/ 

select convert(year(release_date), CHAR) as 'ano de lancamento', count(appid) as 'total de jogos' 
from steam where year(release_date) >= year(current_date()) - 10 group by year(release_date);









