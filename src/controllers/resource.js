// require the getData and getPost from queries 

exports.post = (request, response) => {
    // console.log(request.body);
    let { title, language, description, link } = request.body;
    addResource(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
        else {
        res.render('/', "<h2>Thank you for submitting your resource!</h2>");
        }
})
};
