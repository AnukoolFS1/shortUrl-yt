require('dotenv').config()
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_KEY

const genrateToken = (user) => {

    return jwt.sign({id:user._id, email: user.email}, secretKey)
}


const checkAuthentication = (id) => {

    if(id){
        return jwt.verify(id, secretKey)
    }else{
        return false
    }
}

module.exports = {genrateToken, checkAuthentication}