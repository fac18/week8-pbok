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
('Eloquent JavaScript', 'JavaScript', 'JavaScript online textbook',	'https://eloquentjavascript.net/'),
('JS Regex', 'JavaScript', 'A beginners guide to regex', 'https://flaviocopes.com/javascript-regular-expressions/'),
('UI Elements Glossary', 'HTML', 'An intro to user interface elements',	'https://www.usability.gov/how-to-and-tools/methods/user-interface-elements.html')

COMMIT;
