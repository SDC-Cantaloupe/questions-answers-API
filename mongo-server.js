const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/qa');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connnectedto QA DB'))


const questionSchema = new mongoose.Schema({

  //id	product_id	body	date_written	asker_name	asker_email	reported	helpful
  question_id: Number,
  product_id: Number,
  question_body: String,
  question_date: Number,
  asker_name: String,
  asker_email: String,
  reported: Number,
  question_helpfulness: Number,
})

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

const photoSchma = new mongoose.Schema({
  // id answer_id url
  photo_id: Number,
  answer_id: Number,
  url: String
})

