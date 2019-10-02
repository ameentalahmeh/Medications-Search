// -- Error 404 -------------------------
const errorNotFound = (req, res) => {
    res.json({message:'Sorry, we cannot find that!'});
};

// -- Error 505 -------------------------
const serverError = (req, res) => {
    res.json({message:'There is an server Error!'});
};

module.exports = {errorNotFound, serverError}
