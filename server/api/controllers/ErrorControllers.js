exports.serverError = (err, req, res) => {
  res.status(500);
  res.json({success: false, message: 'There is an Server Error !!'});
};
