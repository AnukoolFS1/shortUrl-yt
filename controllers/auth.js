require('dotenv').config()
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_KEY

const genrateToken = (user) => {
    console.log(user)

    return jwt.sign({...user}, secretKey)
}


const checkAuthentication = (id) => {

    if(id){
        return jwt.verify(id, secretKey)
    }else{
        return false
    }
}

module.exports = {genrateToken, checkAuthentication}