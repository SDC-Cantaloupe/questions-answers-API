const app = require('./servers/mongo/server-mongo.js');

const mongoose = require('mongoose')
//change this if you restart aws server
mongoose.connect('mongodb://UPDATE ME/qa', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false});



const PORT = 3001;

app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})

