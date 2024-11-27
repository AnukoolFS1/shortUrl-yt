const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }, role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
}, {
    timestamps:true
})

const Users = mongoose.model('users', User)

module.exports = Users