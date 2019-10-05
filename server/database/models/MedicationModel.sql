BEGIN;

DROP TABLE IF EXISTS drug CASCADE;

CREATE TABLE drug (
  id              SERIAL        PRIMARY KEY,
  description      TEXT          NOT NULL,
  drugCode        VARCHAR(300)  NOT NULL,
  diseaseCode     VARCHAR(300)  NOT NULL,
  type            INTEGER    NOT NULL  CHECK (type = 1 OR type = 2)
);

INSERT INTO drug (description,drugCode,diseaseCode,type)
select
    left(MD5(i::TEXT), 10),
    CAST((RANDOM() * (899) + 100) as INT),
    CAST((RANDOM() * (899) + 100) as INT),
    floor(random() * 2 + 1)::int
from generate_series(1, 100000) s(i);

COMMIT;
