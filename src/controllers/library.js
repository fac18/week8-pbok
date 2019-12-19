exports.get = (request, response) => {
    response.render('library');
};

exports.filterLanguage = (request, response) => {
    let language = request.params.language;
    getData.getFilteredLang(language, (err, res) => {
        if (err) console.log(err);
        console.log(res);
    })
};





// getData.getQuotes(category, (err, res) => {
//     if (err) console.log(err);
//     response.render("quotes", {
//       title: "quotes",
//       cssPath: "/css/styleQuotes.css",
//       categoryQuotes: res.rows
//     });
//   });
// };
