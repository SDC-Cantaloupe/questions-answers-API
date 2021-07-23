const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('./models.js');
const {getQuestionData} = require('./queries/getQuestionData.js')
const {addQuestion} = require('./queries/addQuestion.js')
const {getAnswerData} = require('./queries/getAnswerData.js')


mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log('Connnectedto QA DB')})

const getAllQuestions = (p_id, page = 1, count = 5) => {
  console.log('db index', p_id, page, count)
  return getQuestionData(p_id, page, count);
}

const getAnswers = (q_id, page = 1, count = 5) => {
  return getAnswerData(q_id, page, count)
}

const addNewQuestion = (p_id, name, email, body) => {
  return addQuestion(p_id, name, email, body)
}

module.exports = {
  getAllQuestions,
  addNewQuestion,
  getAnswers
}