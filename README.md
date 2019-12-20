# Week 8 Project - FAC BiblioTech
### Beth - Judith - Kin - Renata
### by PBOK

# See https://fac-week8-project.herokuapp.com/

# So you want to install me??

* clone repo
* run ```npm install```
* ask us for the super secret env deets
* run ```npm start```

## Goals
- [x] Set up an Express server and discover the awesomeness of Handlebars! <br>
- [x] Spend time considering how to format your layouts, partials and helper functions.

---

## Important elements:

- [x] Include tests and set up code coverage.<br>
- [ ] We expect to see unit tests of pure functions <br>
- [x] Integration tests of your server routes, including tests for errors such as 404.<br>
- [x] You should write tests for your database and use a separate test database and build script<br>
- [x] Use Heroku to host the app and the database<br>
- [x] Include ES6 syntax on the server

## Wireframes

![](https://i.imgur.com/0nqTAPa.jpg)

## Accessibility

![](https://i.imgur.com/s7Yf8Ld.png)

## Schema

![](https://i.imgur.com/Sz6dxdQ.png)

## User Flow

![](https://i.imgur.com/3dd2qri.jpg)

## Design

![](https://i.imgur.com/H2eRafz.jpg)

## MVC Architecture

![](https://i.imgur.com/oMusr3x.png)

## Server Architecture

![](https://i.imgur.com/o0pik7i.png=200x500)

## Testing

![](https://i.imgur.com/I1gfPT1.png)

## Routes

![](https://i.imgur.com/xpgAqQu.png)

## Controller

```javascript

// post request to add new resource to database library
exports.post = (request, response) => {
    let { title, language, description, link } = request.body;
    db.addResource(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
})
response.redirect('/');
};)
```

## Filtering

```javascript

router.post('/filter-language', (req, res) => {
    res.redirect(`/library/${req.body.language}`);
});
router.get('/library/:language', library.filterLanguage);
```

```javascript

exports.filterLanguage = (request, response) => {
    let language = request.params.language;
    filterByLanguage(language, (err, res) => {
        if (err) console.log(err);
        const filterRows = res;
        response.render("filter", { filterRows });
    })
};
```

```javascript

const filterByLanguage = (language, cb) => {
  db.query(`SELECT * FROM resources WHERE language=$1`,
  [language],
  (err, result) => {
    if (err) return cb(err);
    cb(null, result.rows);
  });
}
```

```javascript

{{#each filterRows}}
    <tr>
        <td class="table-data">{{language}}</td>
        <td class="table-data">{{title}}</td>
        <td class="table-data">{{description}}</td>
        <td class="table-data"><a href="{{link}}" alt="link to resource" target="_blank" title="{{link}}">{{link}}</a></td>
    </tr>
{{/each}}
```

## Queries

```javascript

const addResource = (title, language, description, link, cb) => {
  db.query(`INSERT INTO resources(title, language, description, link) VALUES ($1, $2, $3, $4)`,
  [title, language, description, link],
  (err, result) => {
    if (err) return cb(err);
    cb(null, result);
  });
}

module.exports = {
  getAll,
  filterByLanguage,
  addResource
};

```

## Things we've achieved:

    - Mobbing + working as a team
    - No HTML pages at all
    - Filtering options
    - Modularise our code (a bit...)

## What we would change:

    - Create and use custom helpers
    - Do more tests
    - Keep the team work (woohoo!)
