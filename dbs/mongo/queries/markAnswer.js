const {Answers} = require('../models.js');

function markAnswer(a_id, status){
  if (!a_id && typeof a_id !== 'number') {
    throw 'Invalid answer id'
  }

  if (status === 'helpful') {
    Answers.findOneAndUpdate({answer_id: a_id}, {$inc : {helpfulness : 1}})
  } else if (status === 'reported') {
    Answers.findOneAndUpdate({answer_id: a_id}, {$inc: {reported: 1}})
  }
}

module.exports = {
  markAnswer
}