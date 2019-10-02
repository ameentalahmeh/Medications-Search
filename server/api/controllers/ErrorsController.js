// -- Error 404 -------------------------
const errorNotFound = (req, res) => {
    // res.writeHead(404, {'Content-Type' : 'text/html'});
    res.end('<h1> Page Not Found </h1>');
};

// -- Error 505 -------------------------
const serverError = (req, res) => {
    // res.writeHead(505, {'Content-Type' : 'text/html'});
    res.end('<h1> There is an server Error </h1>');
};

module.exports = {errorNotFound, serverError}
