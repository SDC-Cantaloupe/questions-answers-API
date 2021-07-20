const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('./models.js');
const {listQuestions} = require('./queries/listQuestions.js')


mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log('Connnectedto QA DB')})
listQuestions()

// Questions.find({product_id:2}, (err, data) => {

//   console.log(data)
// });