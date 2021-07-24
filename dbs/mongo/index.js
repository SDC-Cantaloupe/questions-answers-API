const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('./models.js');
const {getQuestionData} = require('./queries/getQuestionData.js')
const {addQuestion} = require('./queries/addQuestion.js')
const {getAnswerData} = require('./queries/getAnswerData.js')
const {addAnswer} = require('./queries/addAnswer.js')
const {markQuestion} = require('./queries/markQuestion.js')
const {markAnswer} = require('./queries/markAnswer.js')


//mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', () => {console.log('Connnected to a MongoDB')})

const getAllQuestions = (p_id, page = 1, count = 5) => {
  console.log('db index', p_id, page, count)
  return getQuestionData(p_id, page, count);
}

const getAnswers = (q_id, page = 1, count = 5) => {
  return getAnswerData(q_id, page, count)
}

const postQuestion = (p_id, name, email, body) => {
  return addQuestion(p_id, name, email, body)
}

const postAnswer = (q_id, body, name, email, photos) => {
  return addAnswer(q_id, body, name, email, photos)
}

const markQuestionHelpful = (q_id) => {
  return markQuestion(q_id, 'helpful')
}

const reportQuestion = (q_id) => {
  return markQuestion(q_id, 'reported')
}

const markAnswerHelpful = (a_id) => {
  return markAnswer(a_id, 'helpful')
}

const reportAnswer = (a_id) => {
  return markAnswer(a_id, 'reported')
}

module.exports = {
  getAllQuestions,
  postQuestion,
  getAnswers,
  postAnswer,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer
}