/*Quais os 10 jogos mais caros e quais seus gêneros?*/

select name as 'games', genres as 'categorias', price as 'preço' from steam 
order by price desc limit 10;

