const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urls = new Schema({
    shortId : {
        type: String,
        required: true
    },
    redirect : {
        type: String,
        required: true
    }
}, { timestamps: true })

const URLS = new mongoose.model("urls", urls)