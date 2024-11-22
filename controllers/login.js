const Users = require('../models/user')
const uuid = require('uuid')
const { genrateToken } = require('./auth')

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    console.log('erw')
    try {
        const user = await Users.findOne({ email, password })

        console.log(user)
        if (!user) res.render("login")
        else {
            const token = uuid.v4()
            genrateToken(token, user)
            res.cookie("token", token)
            // res.redirect("/urls")
            res.redirect('/')
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
        console.log('324')
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