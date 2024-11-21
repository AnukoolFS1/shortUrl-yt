require('dotenv').config()
const express = require('express');
const app = express();
const DbConnection = require('./db/db')

PORT = process.env.PORT || 3001

DbConnection()


app.use('/', (req,res) => {
    res.json(['server'])
})


app.listen(PORT, () => console.log(`server has initiated on PORT${PORT}`))