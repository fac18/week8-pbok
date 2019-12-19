const path = require('path');
const express = require('express');

exports.post = (request, response) => {
    let { title, language, description, link } = request.body;
    addResource(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
        else {
        res.render('/');
        }
})
};
