const {Questions} = require('../models.js');

async function markQuestion(q_id, status){

  if (status === 'helpful') {
   await Questions.findOneAndUpdate({question_id: q_id}, {$inc : {question_helpfulness : 1}})
  } else if (status === 'reported') {
    await Questions.findOneAndUpdate({question_id: q_id}, {$inc: {reported: 1}})
  }
}

module.exports = {
  markQuestion
}