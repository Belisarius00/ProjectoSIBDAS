USE PL4;

#Exec apos login; physician_id definido no login; 1 é placeholder
SELECT * FROM Clients WHERE physician_id = 1;

#Query caso o utilizador queira ver todas avaliações de um cliente (1)
SELECT * FROM m4assessment WHERE client_id = 1;

#Query exemplar de uma procura especifica, onde 1 é placeholder para o numero de cliente e 27 Abril 2024 o placeholder para a data
SELECT * FROM m4assessment WHERE ((client_id = 1)AND(assessment_date = STR_TO_DATE('27.04.2024', '%d.%c.%Y')));

SELECT COUNT(*) FROM m4assessment WHERE client_id=1;

#Ver exs de uma certa avaliação; 1 é placeholder
SELECT * FROM ExerciseDetails WHERE assessment_id = 1;

SELECT * FROM ExerciseDetails;

#SELECT * FROM m4assessment RIGHT JOIN Exercise_details ON Exercise_details.assessment_id = m4assessment.assessment_id
