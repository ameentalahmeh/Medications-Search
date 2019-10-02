// -- Error 404 -------------------------
const errorNotFound = (req, res) => {
    res.status(404).send('<h1> Sorry, we cannot find that! </h1>')
};

// -- Error 505 -------------------------
const serverError = (req, res) => {
    res.status(500).send('<h1> Server Error! </h1>')
};

module.exports = {errorNotFound, serverError}
