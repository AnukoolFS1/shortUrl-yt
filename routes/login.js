const route = require('express').Router();
const { handleLogin, handleSignup } = require('../controllers/login')

route.get('/login', (req,res) => {
    return res.render("login")
})
route.get('/signup', (req, res) => {
    return res.render('signup')
})
route.post('/login', handleLogin)
route.post('/signup', handleSignup)

module.exports = route