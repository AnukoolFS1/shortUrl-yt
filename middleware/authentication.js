const {checkAuthentication} = require('../controllers/auth');

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
   
    const entry = checkAuthentication(token)
    console.log(entry, 'asdfqe')
    if(!entry) {
        res.redirect('/')
    }else{
        req.user = entry._doc
        next()
    }
}

module.exports = authenticate

