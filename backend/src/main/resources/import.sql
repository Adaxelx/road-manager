INSERT INTO APP_USER VALUES (1, 'jkowalski@example.com', 'Jan', 'Kowalski','123456789');
INSERT INTO APP_USER VALUES (2, 'anowak@example.com', 'Anna', 'Nowak','123123123');

INSERT INTO SUBSCRIPTION_TYPE VALUES (1, 'Bilet roczny dla samochodów osobowych', 365, 259.99, 'CAR');
INSERT INTO SUBSCRIPTION_TYPE VALUES (2, 'Bilet roczny dla ciężarówek', 365, 469.99, 'TRUCK');
INSERT INTO SUBSCRIPTION_TYPE VALUES (3, 'Miesieczny dla samochodów osobowych', 30, 49.99, 'CAR');
INSERT INTO SUBSCRIPTION_TYPE VALUES (4, 'Miesieczny dla ciężarówek', 30, 69.99, 'TRUCK');

INSERT INTO VEHICLE VALUES (1, 1598.0, 'Anna Nowak', 'NISSAN', 'QASHQAI', '2018-01-02', 'CD2189IO', 'Jan Kowalski', 6546017087893054, 'J11', 1405.0);

INSERT INTO TOLL VALUES (1, 'wjazd A1');

INSERT INTO VEHICLE_TOLL VALUES (1, 10.59, 'CAR', 1);

INSERT INTO ROAD VALUES (1, 'A1', 'Bursztynowa', 'HIGHWAY');

INSERT INTO JUNCTION VALUES (1, 100, 100, 'Rondo ONZ');
INSERT INTO JUNCTION VALUES (2, 200, 200, 'Rondo Daszyńskiego');

INSERT INTO ROAD_SEGMENT VALUES (1, 141, 1, 2, 1);
