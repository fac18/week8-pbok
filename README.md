# FAC BiblioTech
### by PBOK

![](https://media.giphy.com/media/Y0VRqjLynLvV7kr6hp/giphy.gif =200x) ![](https://media.giphy.com/media/Us6H6fWsXwWc/giphy.gif =200x) ![](https://media.giphy.com/media/iOMSfTen1pZUPTx2QF/giphy.gif =260x)

---

# See https://fac-week8-project.herokuapp.com/

---

# So you want to install me??

* clone repo
* run ```npm install```
* ask us for the super secret env deets
* run ```npm start```

---

### TRAV IS WHO???

[![codecov](https://codecov.io/gh/fac18/week8-pbok/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/week8-pbok)
![](https://i.imgur.com/jo4X8UY.png)

---

### HEROKU

* Heroku tries to run ```npm start```
* we already had a ```start``` script in our package.json

![](https://i.imgur.com/eNYVfUG.png)

---

* to override this, we created a Procfile

![](https://i.imgur.com/dMhitsd.png)

* with the below bit of code:

![](https://i.imgur.com/ceYxPPV.png)


---

### SCHEMA

![](https://i.imgur.com/Sz6dxdQ.png)

---

### ACCESSIBILITY 

![](https://i.imgur.com/s7Yf8Ld.png)

---

### WIREFRAMES
![](https://i.imgur.com/6BMyfAA.png)
    
---
    
### USER FLOW

![](https://i.imgur.com/3dd2qri.jpg )

---

### DESIGN 

![](https://i.imgur.com/H2eRafz.jpg)

---

### MVC ARCHITECTURE

![](https://i.imgur.com/oMusr3x.png)

---

## SERVER ARCHITECTURE

![](https://i.imgur.com/o0pik7i.png =200x500)

---

## CONTROLLA

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

---

## ADD RESOURCE TO LIBRARY
```javascript=
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

---

## FILTERING BY LANG

```javascript=
router.post('/filter-language', (req, res) => {
    res.redirect(`/library/${req.body.language}`);
});
router.get('/library/:language', library.filterLanguage);
```




```javascript=
exports.filterLanguage = (request, response) => {
    let language = request.params.language;
    filterByLanguage(language, (err, res) => {
        if (err) console.log(err);
        const filterRows = res;
        response.render("filter", { filterRows });
    })
};
```

---

```javascript=
const filterByLanguage = (language, cb) => {
  db.query(`SELECT * FROM resources WHERE language=$1`,
  [language],
  (err, result) => {
    if (err) return cb(err);
    cb(null, result.rows);
  });
}
```

```javascript=
{{#each filterRows}}
    <tr>
        <td class="table-data">{{language}}</td>
        <td class="table-data">{{title}}</td>
        <td class="table-data">{{description}}</td>
        <td class="table-data"><a href="{{link}}" alt="link to resource" target="_blank" title="{{link}}">{{link}}</a></td>
    </tr>
{{/each}}
```


---

### DATABASE AND ROUTE TESTING

![](https://i.imgur.com/I1gfPT1.png)

---

### NICE THINGS WE'VE ACHIEVED:

- Mobbing + working as a team
- No HTML pages at all
- Filtering option!
- Modularise our code (a bit...)

---

### IF WE WERE TO DO IT AGAIN
### or continue working on it

* Create and use custom helpers
* Do more tests
* Keep up the team work (woohoo!)

---

![](https://media.giphy.com/media/4NsdHaUJCxhgA/giphy.gif)

