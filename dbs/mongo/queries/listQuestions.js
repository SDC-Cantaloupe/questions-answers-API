const mongoose = require('mongoose');
const {Questions} = require('../models.js');

const listQuestions = () => {
  console.log('listQuestions query')
  Questions.find({question_id: 1}, (err, res) => {
    console.log(res)
  })
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