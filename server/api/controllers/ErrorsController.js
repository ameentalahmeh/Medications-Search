// -- Error 404 -------------------------
const errorNotFound = (request, response) => {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('<h1> Page Not Found </h1>');
};

// -- Error 505 -------------------------
const serverError = (request, response) => {
    response.writeHead(500, {'Content-Type' : 'text/html'});
    response.end('<h1> There is an server Error </h1>');
};

module.exports = {errorNotFound, serverError}
