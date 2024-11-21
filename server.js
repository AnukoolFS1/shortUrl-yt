require('dotenv').config()
const express = require('express');
const app = express();

PORT = process.env.PORT || 3001
app.use('/', (req,res) => {
    res.end('server')
})


app.listen(PORT, () => console.log(`server has initiated on PORT${PORT}`))