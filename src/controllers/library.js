const {
    getAll,
    filterByLanguage
  } = require('../model/queries')

// get list of resources from library database
exports.get = (request, response) => {
    getAll((err, res) => {
        const tableRows = res;
        response.render('library', { tableRows });
    })
};

// filter list of resources from library database by language
exports.filterLanguage = (request, response) => {
    let language = request.params.language;
    filterByLanguage(language, (err, res) => {
        if (err) console.log(err);
        const filterRows = res;
        response.render("filter", { filterRows });
    })
};


