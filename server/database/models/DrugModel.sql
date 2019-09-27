BEGIN;

DROP TABLE IF EXISTS drug CASCADE;

CREATE TABLE drug (
  id              SERIAL        PRIMARY KEY,
  decription      TEXT          NOT NULL,
  drugCode        VARCHAR(300)  NOT NULL,
  diseaseCode     VARCHAR(300)  NOT NULL,
  type            INTEGER       NOT NULL  CONSTRAINT legal_type CHECK (type = 1 OR type = 2)
);

INSERT INTO drug (decription,drugCode,diseaseCode,type) VALUES
('Acetaminophen','xaw123','aaa444',1),
('Citalopram','xaw456','bbb555',2),
('Lexapro','asp123','ccc666',1),
('Omeprazole','asp456','ddd777',2),
('Ativan','rfn123','eee888',1),
('Xanax','rfn456','fff999',2);

COMMIT;
