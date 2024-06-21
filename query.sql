-- Display female passengers who survived and are older than 30.

SELECT  c1
FROM tested
WHERE c5 = 'female' AND c2 = 1 and c6 > 30

-- Find the average age of men who didn't survive

SELECT c4, AVG(c6) as everageAge
FROM tested
WHERE c5= 'male' and c2=0

-- Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C'."

SELECT c1,c4, c10, c12
FROM tested
WHERE c10 > 20 and c10 < 50 and c12= 'C'

-- Find the total number of the survivors in the first class.

SELECT COUNT(*)
FROM tested
WHERE c2= 1 and c3= 1

--  Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets.".

SELECT *
FROM tested
WHERE c10 > 75 AND c12= 'C'
