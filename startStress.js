const app = require('./servers/mongo/server-mongo.js');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:3001/qaStress', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false});

const PORT = 3001;

app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})

//for connectiong to hosted db
// mongoose.connect('mongodb://tyler:sdc@18.119.136.14/qa', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false});