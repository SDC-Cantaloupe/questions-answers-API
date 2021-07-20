const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('../models.js');

const listQuestions = (product_id, page, count, callback) => {

  Questions.find({product_id: product_id}, (err, data) => {
    callback(data)
  }).limit(count)

  // Questions.find({product_id: 1}, (err, data) => {
  //   data.map(question => {
  //     Answers.find({question_id: question.question_id}, (err, data) => {
  //       console.log(data)
  //     })
  //   })
  // }).limit(2)
  // console.log('listQuestions query')
  // let questions = await Questions.find({product_id: 1});

  // console.log(questions)

  //let answerTest = await Answers.find({question_id: 1});

  // console.log('questions', questions)
  // console.log('answers', answerTest)
  //needs to inclue parameters of (product_id, page, count)
  //use a variable for limit and a variable for amout display
  //with a sort function? to have pages
  //aggregate answers and photos of answers
  //or mongoose paginate package
  //needs to ignore reported questions
  //needs page input default 1,
  //needs count input default 5
}

module.exports = {
  listQuestions
}