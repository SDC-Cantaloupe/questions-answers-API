const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('../models.js');

async function getQuestionData(p_id, page = 1, count = 5) {
  let questions = await Questions.find({product_id:p_id}, {_id: 0}).limit(2);

  let answers = await Promise.all(questions.map(async (question) => {
    let answer = await Answers.find({question_id: question.question_id}, {_id: 0}).limit(2);
    return answer
  }))


  let answerPhotos = await Promise.all(answers.map(async (answerGroup) => {
    let photos = await Promise.all(answerGroup.map(async (answer) => {
      let photo =  await Answer_Photos.find({answer_id: answer.answer_id}, {_id:0})
      return photo
    }));
    return photos
  }))

  // let answersObject = {};
  // console.log(questions.length, answers.length)
  // answers.map(answer => {
  //   console.log(answer)
  // })

  // answers.map(answer => {
    //console.log('HYE', answer)
    // answer.id = answer.answer_id;
    // delete answer.answer_id;
    // delete answer.question_id;

    // answersObject.answer.id =
    // answer
  // })

  //console.log(answersObject)

  let result = {
    'product_id': p_id,
    'results': []
  }

  for ( let i = 0; i < answers.length; i++) {
    let questionResult = {...questions[i]}._doc

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

    delete questionResult.product_id;
    delete questionResult.asker_email;

    console.log(questionResult.answers)
    Object.values(questionResult.answers).forEach((id, index) => {
      console.log('dataa', id,i)
      let answer = id;
      answer.photos = answerPhotos[i][index]
    })
    // for(let id in questionResult.answers) {
    //   console.log('index',i)
    //   let answer = questionResult.answers[id]
    //   answer.photos = 'hey'
    // }
    // questionResult.answers.forEach((result,j) => {
    //   let resultWithPhotos = {...result}._doc;

    //   resultWithPhotos.photos = answerPhotos[i][j];
    // })
    result.results.push(questionResult)
  }
  return result
}

module.exports = {
  getQuestionData
}