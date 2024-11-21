require('dotenv').config()
const express = require('express');
const app = express();
const DbConnection = require('./db/db')
const urlRoute = require('./routes/urls')

PORT = process.env.PORT || 3001

DbConnection()

app.use(express.urlencoded({extended:false}))

app.use('/urls', urlRoute)


app.listen(PORT, () => console.log(`server has initiated on PORT${PORT}`))