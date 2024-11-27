const { checkAuthentication } = require('../controllers/auth');

const authenticate = (req, res, next) => {
    const token = req.cookies.token;

    const entry = checkAuthentication(token)
    if (!entry) {
        res.redirect('/')
    } else {
        req.user = entry
        next()
    }
}



module.exports = authenticate

