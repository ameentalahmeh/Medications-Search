// -- Error 404 -------------------------
const errorNotFound = (req, res) => {
    res.send('<h1>Sorry, we cannot find that!</h1>')
};

// -- Error 505 -------------------------
const serverError = (req, res) => {
    res.send('<h1> There is an server Error </h1>');
};

module.exports = {errorNotFound, serverError}
