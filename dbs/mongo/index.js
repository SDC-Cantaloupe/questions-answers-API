const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('./models.js');
const {listQuestions} = require('./queries/listQuestions.js')


mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log('Connnectedto QA DB')})

async function getAllQuestions(p_id, page, count) {
  let questions = await Questions.find({product_id:1}).limit(5);



  let answers = await Promise.all(questions.map(async (question) => {
    let answer = await Answers.find({question_id: question.question_id}).limit(5);
    return answer
  }))

  let result = {
    'product_id': 1,
    'results': []
  }

  for ( let i = 0; i < answers.length; i++) {
    let x = Object.assign({}, questions[i])._doc

    x.answers = answers[i]


    result.results.push(x)
  }


  return result
}


module.exports = {
  getAllQuestions
}