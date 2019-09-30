exports.serverError = (err, req, res) => {
  res.json({success: false, message: 'There is an Server Error !!'});
};
