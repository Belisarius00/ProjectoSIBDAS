USE PL4;

INSERT INTO Physician(physician_name)
VALUES("default");

INSERT INTO Clients(physician_id, contact_info)
VALUES(1,'123456789');
INSERT INTO Clients(physician_id, contact_info)
VALUES(1,'234567891');

INSERT INTO m4assessment(client_id, assessment_date, new_training_plan)
VALUES(1,STR_TO_DATE('27.04.2024', '%d.%c.%Y'),"n");
INSERT INTO m4assessment(client_id, assessment_date, new_training_plan)
VALUES(2,STR_TO_DATE('25.04.2024', '%d.%c.%Y'),"n");

INSERT INTO ExerciseDetails(assessment_id, exercise_name ,series ,duration ,cadence ,ex_load ,rest ,material ,observations)
VALUES(1, "Push-ups", 20, "60s", "3/s", "", "30s","","OK");
INSERT INTO ExerciseDetails(assessment_id, exercise_name ,series ,duration ,cadence ,ex_load ,rest ,material ,observations)
VALUES(1, "Sit-ups", 20, "60s", "3/s", "", "30s","","OK");

INSERT INTO ExerciseDetails(assessment_id, exercise_name ,series ,duration ,cadence ,ex_load ,rest ,material ,observations)
VALUES(2, "Push-ups", 20, "60s", "3/s", "", "30s","","OK");
INSERT INTO ExerciseDetails(assessment_id, exercise_name ,series ,duration ,cadence ,ex_load ,rest ,material ,observations)
VALUES(2, "Pull-ups", 20, "60s", "3/s", "", "30s","","OK");