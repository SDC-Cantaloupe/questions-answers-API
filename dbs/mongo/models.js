const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')



//from inside folder with files
//mongoimport --db=qa --collection=questions --type=csv --headerline --file=questions.csv
//mongoimport --db=qa --collection=answers --type=csv --headerline --file=answers.csv
//mongoimport --db=qa --collection=answers_photos --type=csv --headerline --file=answers_photos.csv

const questionSchema = new mongoose.Schema({
  //id	product_id	body	date_written	asker_name	asker_email	reported	helpful
  question_id: Number,
  product_id: {type: Number, index: true},
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
  question_id: {type: Number, index: true},
  body: String,
  date: String,
  answerer_name: String,
  answerer_email: String,
  reported: Number,
  helpfulness: Number
})

const photoSchema = new mongoose.Schema({
  // id answer_id url
  photo_id: Number,
  answer_id: {type: Number, index: true},
  url: String
})

questionSchema.plugin(mongoosePaginate);
answerSchema.plugin(mongoosePaginate);
photoSchema.plugin(mongoosePaginate);


const Questions = mongoose.model('Questions', questionSchema, 'questions');
const Answers = mongoose.model('Answers', answerSchema, 'answers');
const Answer_Photos = mongoose.model('Answer_Photos', photoSchema, 'answers_photos');

module.exports = {
  Questions,
  Answers,
  Answer_Photos
}