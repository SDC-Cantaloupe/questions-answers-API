const {Questions, Answers} = require('../models.js');

async function markAnswer(a_id, status){

  if (status === 'helpful') {
   await Answers.findOneAndUpdate({answer_id: a_id}, {$inc : {helpfulness : 1}})
  } else if (status === 'reported') {
    await Answers.findOneAndUpdate({answer_id: a_id}, {$inc: {reported: 1}})
  }
}

async function markQuestion(q_id, status){

  if (status === 'helpful') {
   await Questions.findOneAndUpdate({question_id: q_id}, {$inc : {question_helpfulness : 1}})
  } else if (status === 'reported') {
    await Questions.findOneAndUpdate({question_id: q_id}, {$inc: {reported: 1}})
  }
}
module.exports = {
  markAnswer,
  markQuestion
}