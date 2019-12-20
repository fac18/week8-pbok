const db = require('../model/queries/index');

// post request to add new resource to database library
exports.post = (request, response) => {
    let { title, language, description, link } = request.body;
    db.addResource(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
})
response.redirect('/');
};
