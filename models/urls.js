const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urls = new Schema({
    shortId : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    },
    visitHistory: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true })

const URLS = new mongoose.model("urls", urls)

module.exports = URLS