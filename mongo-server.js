const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {


  console.log('Connnectedto QA DB')

  //console.log(db.db.collection('questions'))

  // db.db.collection('questions', (err, collection) => {
  //   collection.find({product_id:1}).toArray((err, data) => {
  //     console.log(data.length)
  //     console.log('----------------------------------')
  //   })

  // })

})






const questionSchema = new mongoose.Schema({

  //id	product_id	body	date_written	asker_name	asker_email	reported	helpful
  question_id: Number,
  product_id: Number,
  question_body: String,
  question_date: String,
  asker_name: String,
  asker_email: String,
  reported: Number,
  question_helpfulness: Number,
})

const Question = mongoose.model('Questinon', questionSchema, 'questions');

// Question.find({product_id:1}, (err, data) => {
//   console.log(data.length)
// })


const answerSchema = new mongoose.Schema({
  //id	question_id	body	date_written	answerer_name	answerer_email	reported	helpful
  answer_id: Number,
  question_id: Number,
  body: String,
  date: Number,
  answerer_name: String,
  answerer_email: String,
  reported: Number,
  hepfulness: Number
})

const Answer = mongoose.model('Answer', answerSchema, 'answers');

const photoSchema = new mongoose.Schema({
  // id answer_id url
  photo_id: Number,
  answer_id: Number,
  url: String
})

const Answer_Photos = mongoose.model('Answer_Photos', photoSchema, 'photos');


Answer_Photos.find({answer_id:5}, (err, data) => {
  console.log(data)
})