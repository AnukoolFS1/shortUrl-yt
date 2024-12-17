const Users = require('../models/user')
const uuid = require('uuid')
const { genrateToken } = require('./auth')

const handleLogin = async (req, res) => {
    const cookie = req.cookies
    console.log(cookie)
    const { email, password } = req.body;
    try {
        const user = await Users.findOne({ email, password })

        if (!user) res.render("login")
        else {
            const token = genrateToken(user)
            res.cookie("token", token)
            res.json({msg:'success'})
        }
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("<h1>server has crashed try again</h1>")
    }

}

const handleSignup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = new Users({ name, email, password });
        await user.save();
        res.redirect('/users/login')
    } catch (err) {
        console.log(err.message);
        res.status(500).send("<h1>Something went wrong</h1>")
    }

}

module.exports = {
    handleLogin,
    handleSignup
}