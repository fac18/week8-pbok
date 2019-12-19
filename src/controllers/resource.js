const path = require('path');
const express = require('express');
const db = require('../model/queries/index');

exports.post = (request, response) => {
  console.log("i'm in resource js!!")
    let { title, language, description, link } = request.body;
    console.log(request.body);
    db.addResource(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
})
console.log("i'm done with db");
response.redirect('/');
};
