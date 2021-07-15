DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  question_id SERIAL PRIMARY KEY,
  product_id INTEGER NULL DEFAULT NULL,
  question_body VARCHAR(250) NULL DEFAULT NULL,
  question_date BIGINT NULL DEFAULT NULL,
  asker_name VARCHAR(50) NULL DEFAULT NULL,
  asker_email VARCHAR(75) NULL DEFAULT NULL,
  reported INTEGER NULL DEFAULT NULL,
  question_helpfulness INTEGER NULL DEFAULT NULL
);

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  answer_id SERIAL PRIMARY KEY,
  question_id INTEGER NULL DEFAULT NULL,
  body VARCHAR(250) NULL DEFAULT NULL,
  date BIGINT NULL DEFAULT NULL,
  answerer_name VARCHAR(50) NULL DEFAULT NULL,
  answerer_email VARCHAR(75) NULL DEFAULT NULL,
  reported INTEGER NULL DEFAULT NULL,
  helpfulness INTEGER NULL DEFAULT NULL
);

DROP TABLE IF EXISTS answers_photos;

CREATE TABLE answers_photos (
  photo_id SERIAL PRIMARY KEY,
  answer_id INTEGER NULL DEFAULT NULL,
  url VARCHAR(250) NULL DEFAULT NULL
);

ALTER TABLE answers ADD FOREIGN KEY (question_id) REFERENCES questions (question_id);
ALTER TABLE answers_photos ADD FOREIGN KEY (answer_id) REFERENCES answers (answer_id);


-- \copy questions from 'questions.csv' delimiter ',' csv header;
-- \copy answers from 'answers.csv' delimiter ',' csv header;
-- \copy answers_photos from 'answers_photos.csv' delimiter ',' csv header;
