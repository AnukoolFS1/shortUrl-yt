const URLS = require('../models/urls');
const shortid = require('shortid')
const handleUrl = async (req, res) => {
    try {
        const urls = await URLS.find({})

        res.render("home", {data:urls})
    } catch (err) {
        res.status(500).json({ msg: "something went wrong" })
    }

}

const saveUrl = async (req, res) => {
    const { url } = req.body;
    const shortId = shortid.generate(url)

    const newEntry = { url, shortId };

    try{
        const data = new URLS(newEntry);
        console.log(data)
        await data.save()

        res.render('home')
    }catch(err) {
        console.log(err.message)
    }
}

const visitUrl = async (req, res) => {
    const shortId = req.params.url;
    const data = await URLS.findOne({shortId});

    await URLS.findByIdAndUpdate({_id:data._id}, {$inc: {visitHistory:1}})
    res.redirect(data.url)
}

module.exports = { handleUrl, saveUrl, visitUrl }