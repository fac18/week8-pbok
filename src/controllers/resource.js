const db = require('../model/queries/index');

exports.post = (request, response) => {
    let { title, language, description, link } = request.body;
    db.addResource(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
})
response.redirect('/');
};
