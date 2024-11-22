const route = require('express').Router();
const { handleLogin } = require('../controllers/login')

route.get('/', handleLogin)


module.exports