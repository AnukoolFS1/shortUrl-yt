const {checkAuthentication} = require('../controllers/auth');

const authenticate = (req, res, next) => {
    const token = req.cookies.token;
   
}

