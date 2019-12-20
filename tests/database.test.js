const test = require("tape");
const runDbBuild = require("../src/model/db_build");
const getData = require("../src/model/queries/index");

const allResources = [ { id: 1, title: 'Coolors', language: 'CSS', description: 'Colour scheme generator', link: 'https://coolors.co/' }, { id: 2, title: 'Flex-box Froggy', language: 'CSS', description: 'Back to basics flex-box game', link: 'http://flexboxfroggy.com/' }, { id: 3, title: 'CSS lengths', language: 'CSS', description: 'CSS dimensions tutorial', link: 'https://css-tricks.com/the-lengths-of-css/' }, { id: 4, title: 'Eloquent JavaScript', language: 'JAVASCRIPT', description: 'JavaScript online textbook', link: 'https://eloquentjavascript.net/' }, { id: 5, title: 'JS Regex', language: 'JAVASCRIPT', description: 'A beginners guide to regex', link: 'https://flaviocopes.com/javascript-regular-expressions/' }, { id: 6, title: 'UI Elements Glossary', language: 'HTML', description: 'An intro to user interface elements', link: 'https://www.usability.gov/how-to-and-tools/methods/user-interface-elements.html' }, { id: 7, title: 'Express documentation', language: 'EXPRESS', description: 'Official Express documentation', link: 'https://expressjs.com/en/api.html' }, { id: 8, title: 'What is handlebars', language: 'HANDLEBARS', description: 'Introduction to handlebars', link: 'https://handlebarsjs.com/guide/#what-is-handlebars' }, { id: 9, title: 'PostgreSQL tutorial', language: 'SQL', description: 'Learn PostgreSQL from scratch', link: 'http://www.postgresqltutorial.com/' }, { id: 10, title: 'Node docs', language: 'NODE', description: 'Node documentation', link: 'https://nodejs.org/docs/latest-v11.x/api/' }, { id: 11, title: 'React tutorial', language: 'REACT', description: 'Intro to React tutorial', link: 'https://reactjs.org/tutorial/tutorial.html' } ]

test("Test we return all the resources", t => {
  runDbBuild((err, res) => {
    if (err) {
      throw err;
    }
    getData.getAll((err, res) => {
      if (err) {
        throw err;
      }
      t.deepEqual(res, allResources, "should return first resource");
      t.end();
    });
  });
});
