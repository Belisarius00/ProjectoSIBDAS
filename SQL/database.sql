DROP DATABASE PL4;
CREATE DATABASE PL4; USE PL4;

CREATE TABLE Physician (
	physician_id INT PRIMARY KEY AUTO_INCREMENT,
   physician_name VARCHAR(50)
	#physician_username NOT NULL;
	#physician_password NOT NULL
);

CREATE TABLE Clients (
	client_id INT PRIMARY KEY AUTO_INCREMENT,
	physician_id INT,
	client_name VARCHAR(50),
	height NUMERIC,
	weight NUMERIC,
	gender VARCHAR(1),
	contact_info VARCHAR(9) NOT NULL CONSTRAINT ckPatientcontact_info CHECK (REGEXP_LIKE (contact_info,'^[0-9]{9}$')),
	FOREIGN KEY (physician_id) REFERENCES Physician(physician_id)
);

CREATE TABLE m4assessment (
   assessment_id INT PRIMARY KEY AUTO_INCREMENT,
   client_id INT,
   assessment_date DATE NOT NULL,
   session_start_time TIME,
   session_end_time TIME,
   sleep_quality NUMERIC,
	tiredness NUMERIC,
	diet NUMERIC,
   pss_rating NUMERIC,
   psi_rating NUMERIC,
   new_training_plan VARCHAR(1) NOT NULL CONSTRAINT ckNewTrainingPlan CHECK (REGEXP_LIKE(new_training_plan, '^[ynYN]*$')),
   FOREIGN KEY (client_id) REFERENCES Clients(client_id)
);

CREATE TABLE ExerciseDetails (
	exercise_id INT PRIMARY KEY AUTO_INCREMENT,
	assessment_id INT, 
	exercise_name VARCHAR(50),
	series NUMERIC,
	duration VARCHAR(10),
	cadence VARCHAR(10), 
	ex_load VARCHAR(10),
	rest VARCHAR(10),
	material VARCHAR(50),
	observations VARCHAR(200), 
	FOREIGN KEY (assessment_id) REFERENCES m4assessment(assessment_id)
);