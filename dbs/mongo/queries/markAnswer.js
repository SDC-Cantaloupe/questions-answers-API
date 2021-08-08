const {Answers} = require('../models.js');

async function markAnswer(a_id, status){

  if (status === 'helpful') {
   await Answers.findOneAndUpdate({answer_id: a_id}, {$inc : {helpfulness : 1}})
  } else if (status === 'reported') {
    await Answers.findOneAndUpdate({answer_id: a_id}, {$inc: {reported: 1}})
  }
}

module.exports = {
  markAnswer
}