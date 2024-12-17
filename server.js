require('dotenv').config()
const express = require('express');
const app = express();
const DbConnection = require('./db/db')
const urlRoute = require('./routes/urls')
const userRoute = require('./routes/login')
const path = require('path');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/authentication')
const cors = require('cors')
PORT = process.env.PORT || 3001

DbConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res) => {
    res.redirect('/users/login')
})
app.use('/urls', authenticate, urlRoute)
app.use('/users', userRoute)


app.listen(PORT, () => console.log(`server has initiated on PORT${PORT}`))