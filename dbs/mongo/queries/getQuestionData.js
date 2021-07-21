const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('../models.js');

async function getQuestionData(p_id, page, count) {
  console.log('limit', count, 'p_id', p_id)
  let questions = await Questions.find({product_id:p_id}, {_id: 0}).limit(count);

  let answers = await Promise.all(questions.map(async (question) => {
    let answer = await Answers.find({question_id: question.question_id}, {_id: 0}).limit(count);
    return answer
  }))


  let answerPhotos = await Promise.all(answers.map(async (answerGroup) => {
    let photos = await Promise.all(answerGroup.map(async (answer) => {
      let photo =  await Answer_Photos.find({answer_id: answer.answer_id}, {_id:0})
      return photo
    }));
    return photos
  }))

  let result = {
    'product_id': p_id,
    'results': []
  }

  for ( let i = 0; i < answers.length; i++) {
    let questionResult = {...questions[i]}._doc

    delete questionResult.reported;
    delete questionResult.product_id;
    delete questionResult.asker_email;

    let answersObj = {};

    answers[i].map(answer => {
      let answerResult = {...answer}._doc;
      answerResult.id = answerResult.answer_id;
      delete answerResult.answer_id;
      delete answerResult.question_id;
      delete answerResult.answerer_email;
      delete answerResult.reported;

      answersObj[answerResult.id] = answerResult
    })

    questionResult.answers = answersObj;

    Object.values(questionResult.answers).forEach((id, index) => {
      let answer = id;
      answer.photos = answerPhotos[i][index]
    })

    result.results.push(questionResult)
  }
  return result
}

module.exports = {
  getQuestionData
}