exports.client = (req, res) => {
  res.status(404).render('404', {
    statusCode: 404,
    errorMessage: 'Page not found',
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('500', {
    statusCode: 500,
    errorMessage: 'Internal server error',
  });
};
