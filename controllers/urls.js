const URLS = require('../models/urls');
const shortid = require('shortid')

function handleUrl() {

    function checkAuthorization(user) {

        if (user.role === "admin") {
            return URLS.find({});
        } else {
            return URLS.find({ createdBy: user.id });
        }
    }

    return async (req, res) => {
        try {
            const urls = await checkAuthorization(req.user)
            res.render("home", { data: urls });
        } catch (err) {
            console.log(err)
            res.status(500).json({ msg: "something went wrong" });
        }

    }
}

const saveUrl = async (req, res) => {
    const { url } = req.body;
    const shortId = shortid.generate(url);

    const newEntry = { url, shortId, createdBy: req.user._id };

    try {
        const data = new URLS(newEntry);
        await data.save();

        res.redirect('/urls');
    } catch (err) {
        console.log(err.message)
        res.status(500).send('error')
    }
}

const visitUrl = async (req, res) => {
    const shortId = req.params.url;

    try {
        const data = await URLS.findOne({ shortId });

        await URLS.findByIdAndUpdate({ _id: data._id }, { $inc: { visitHistory: 1 } });
        res.redirect(data.url)
    }
    catch (err) {

        res.redirect('/urls');
    }
}

module.exports = { handleUrl, saveUrl, visitUrl }