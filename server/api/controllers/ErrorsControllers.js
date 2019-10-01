
// -- Error 404 -------------------------
const errorNotFound = (request, response) => {
    response.writeHead(404, {'Content-Type' : 'text/html'});
    response.end('<h1>Page Not Found : Error 404</h1>');
};

// -- Error 505 -------------------------
const serverError = (request, response) => {
    response.writeHead(505, {'Content-Type' : 'text/html'});
    response.end('<h1> Server has Moseba : Error 505 </h1>');
};

module.exports = {errorNotFound ,serverError}
