const {Questions} = require('../models.js');

async function markQuestion(q_id, status){
  if (!q_id && typeof q_id !== 'number') {
    throw 'Invalid question id'
  }

  if (status === 'helpful') {
   await Questions.findOneAndUpdate({question_id: q_id}, {$inc : {question_helpfulness : 1}})
   .then(res => {
     if (!res) {
       throw new Error('Question does not exist')
     }
   })
  } else if (status === 'reported') {
    await Questions.findOneAndUpdate({question_id: q_id}, {$inc: {reported: 1}})
    .then(res => {
      if (!res) {
        throw 'Question does not exist'
      }
    })
  }
}

module.exports = {
  markQuestion
}