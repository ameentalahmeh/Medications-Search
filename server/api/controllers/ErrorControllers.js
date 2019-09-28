
exports.pageNotFound = (req, res) => {
  res.status(404);
  res.json({code: 1, success: false, message: 'Page Not Found !!'});
};

exports.serverError = (err, req, res) => {
  res.status(500);
  res.json({code: 2, success: false, message: 'There is an Server Error !!'});
};
