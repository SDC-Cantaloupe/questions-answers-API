const mongoose = require('mongoose');

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

const answerSchema = new mongoose.Schema({
  //id	question_id	body	date_written	answerer_name	answerer_email	reported	helpful
  answer_id: Number,
  question_id: Number,
  body: String,
  date: String,
  answerer_name: String,
  answerer_email: String,
  reported: Number,
  hepfulness: Number
})

const photoSchema = new mongoose.Schema({
  // id answer_id url
  photo_id: Number,
  answer_id: Number,
  url: String
})


const Questions = mongoose.model('Questions', questionSchema, 'questions');
const Answers = mongoose.model('Answers', answerSchema, 'answers');
const Answer_Photos = mongoose.model('Answer_Photos', photoSchema, 'photos');

module.exports = {
  Questions,
  Answers,
  Answer_Photos
}