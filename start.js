const app = require('./servers/mongo/server-mongo.js');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false});

const PORT = 3000;

app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})