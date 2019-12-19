BEGIN;

DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  language VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  link VARCHAR NOT NULL
);

INSERT INTO resources (title, language, description, link) VALUES
('Coolors', 'CSS', 'Colour scheme generator', 'https://coolors.co/'),
('Flex-box Froggy', 'CSS', 'Back to basics flex-box game', 'http://flexboxfroggy.com/'),
('CSS lengths', 'CSS', 'CSS dimensions tutorial',	'https://css-tricks.com/the-lengths-of-css/'),
('Eloquent JavaScript', 'JAVASCRIPT', 'JavaScript online textbook',	'https://eloquentjavascript.net/'),
('JS Regex', 'JAVASCRIPT', 'A beginners guide to regex', 'https://flaviocopes.com/javascript-regular-expressions/'),
('UI Elements Glossary', 'HTML', 'An intro to user interface elements',	'https://www.usability.gov/how-to-and-tools/methods/user-interface-elements.html'),
('Express documentation', 'EXPRESS', 'Official Express documentation', 'https://expressjs.com/en/api.html'),
('What is handlebars', 'HANDLEBARS', 'Introduction to handlebars', 'https://handlebarsjs.com/guide/#what-is-handlebars'),
('PostgreSQL tutorial', 'SQL', 'Learn PostgreSQL from scratch', 'http://www.postgresqltutorial.com/'),
('Node docs', 'NODE', 'Node documentation', 'https://nodejs.org/docs/latest-v11.x/api/'),
('React tutorial', 'REACT', 'Intro to React tutorial', 'https://reactjs.org/tutorial/tutorial.html');
COMMIT;
