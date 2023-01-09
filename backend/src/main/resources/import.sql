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

INSERT INTO PAYMENT (ID, PAID, PRICE, PASSAGE_ID) VALUES (1, false, 100.00, 1);
INSERT INTO PAYMENT (ID, PAID, PRICE, PASSAGE_ID) VALUES (2, false, 59.99, 2);
INSERT INTO PAYMENT (ID, PAID, PRICE, PASSAGE_ID) VALUES (3, true, 10.00, 3);
INSERT INTO PAYMENT (ID, PAID, PRICE, PASSAGE_ID) VALUES (4, false, 49.99, 4);

INSERT INTO PASSAGE (ID, DATE, PAYMENT_ID, JUNCTION_START, JUNCTION_END, VEHICLE) VALUES (1, '2022-01-01', 1, 1, 2, 1);
INSERT INTO PASSAGE (ID, DATE, PAYMENT_ID, JUNCTION_START, JUNCTION_END, VEHICLE) VALUES (2, '2022-01-02', 2, 2, 1, 1);
INSERT INTO PASSAGE (ID, DATE, PAYMENT_ID, JUNCTION_START, JUNCTION_END, VEHICLE) VALUES (3, '2022-01-03', 3, 1, 2, 1);
INSERT INTO PASSAGE (ID, DATE, PAYMENT_ID, JUNCTION_START, JUNCTION_END, VEHICLE) VALUES (4, '2022-01-31', 4, 2, 1, 1);
