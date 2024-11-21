const URLS = require('../models/urls');

const handleUrl = async (req, res) => {
    try {
        const urls = await URLS.find({})

        res.status(200).json(urls)

    } catch (err) {
        res.status(500).json({ msg: "something went wrong" })
    }

}

const saveUrl = async (req, res) => {
    const {url} = req.body;

    const newEntry = {url, redirect};

    try{
        const data = await new URLS(newEntry);
        await data.save()

    }catch(err) {
        console.log(err.message)
    }
}

module.exports = { handleUrl, saveUrl }