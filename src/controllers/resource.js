const path = require('path');


exports.post = (request, response) => {
    let { title, language, description, link } = request.body;
    postData(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
        else {
        res.render('/');
        }
})
};