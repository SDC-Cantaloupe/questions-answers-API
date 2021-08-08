const {Questions, Answers, Answer_Photos} = require('../models.js');
const {formatResponse} = require('../controllers/questionResponse.js');

async function getQuestionData(p_id, page, count) {

  // let questions = await Questions.find({product_id:p_id, reported: 0}, {_id: 0}).limit(count);

  let questions;

  await Questions.paginate({product_id: p_id, reported: 0}, {page: page, limit: count, projection: {_id: 0}}, function (err, results) {
    if (err) {
      console.log('error with paginated resutls', err)
    } else {
      questions = results.docs
    }
  })

  let answers = await Promise.all(questions.map(async (question) => {
    let answer = await Answers.find({question_id: question.question_id, reported: 0}, {_id: 0}).limit(count);
    return answer
  }))

  let answerPhotos = await Promise.all(answers.map(async (answerGroup) => {
    let photos = await Promise.all(answerGroup.map(async (answer) => {
      let photo =  await Answer_Photos.find({answer_id: answer.answer_id}, {_id:0})
      return photo
    }));
    return photos
  }))

  return formatResponse(p_id, questions, answers, answerPhotos)
}

module.exports = {
  getQuestionData
}