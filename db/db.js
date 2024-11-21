const mongoose = require('mongoose');
const URI = process.env.DB_URI

async function connectDb() {

    await mongoose.connect(URI);
    console.log('db connected')
}

module.exports = connectDb