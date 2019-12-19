const {
    getAll,
    filterByLanguage
  } = require('../model/queries')


exports.get = (request, response) => {
    getAll((err, res) => {
        const tableRows = res;
        response.render('library', { tableRows });
    })
};

exports.filterLanguage = (request, response) => {
    let language = request.params.language;
    filterByLanguage(language, (err, res) => {
        if (err) console.log(err);
        const filterRows = res;
        response.render("filter", { filterRows });
    })
};


