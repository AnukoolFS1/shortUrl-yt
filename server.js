require('dotenv').config()
const express = require('express');
const app = express();
const DbConnection = require('./db/db')
const urlRoute = require('./routes/urls')
const path = require('path')
PORT = process.env.PORT || 3001

DbConnection()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.redirect('/urls')
})
app.use('/urls', urlRoute)
app.use('/login', )


app.listen(PORT, () => console.log(`server has initiated on PORT${PORT}`))