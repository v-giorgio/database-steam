/*Quais os 5 gêneros com maior restrição de idade?*/

select distinct genres from steam where required_age =18 limit 5;

