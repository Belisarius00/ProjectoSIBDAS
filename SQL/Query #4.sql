USE PL4;

CREATE TRIGGER before_client_appointment_insert
BEFORE INSERT ON ClientAppointments
FOR EACH client_id
BEGIN
	DECLARE appointment_count INT;
	SELECT COUNT(*) INTO appointment_count
	FROM ClientAppointments
	WHERE client_id = NEW.client_id
	AND YEARWEEK(appointment_date) = YEARWEEK(NEW.appointment_date);

    IF appointment_count >= 3 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Client has already made 3 appointments this week';
    END IF;
END;