/*Quais os 5 gêneros com maior restrição de idade?*/

select distinct genres as `Gêneros`, required_age as `Idade Mínima`from steam where required_age = (select max(required_age) from steam) limit 5;

