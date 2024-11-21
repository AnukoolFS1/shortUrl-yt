const URLS = require('../models/urls');
const shortid = require('shortid')
const handleUrl = async (req, res) => {
    try {
        const urls = await URLS.find({})

        // console.log(urls)
        // res.status(200).json(urls)
        res.render("home", {data:urls})
        // res.end("sd")
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

    }catch(err) {
        console.log(err.message)
    }
    res.end()
}

module.exports = { handleUrl, saveUrl }