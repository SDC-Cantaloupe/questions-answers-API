const express = require('express');
const router = require('./routes.js')
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router)




//app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})

module.exports = app;