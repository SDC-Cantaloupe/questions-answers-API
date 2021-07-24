const {Questions, Answers, Answer_Photos} = require('../models.js');
const {formatResponse} = require('../controllers/questionResponse.js');

async function getQuestionData(p_id, page, count) {

  let questions = await Questions.find({product_id:p_id, reported: 0}, {_id: 0}).limit(count);

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

async function addQuestion(p_id, name, email, body){

  let findHighestQ_ID = await Questions.find().sort({question_id: -1}).limit(1);

  let q_id =  findHighestQ_ID[0].question_id + 1;
  console.log(q_id)

  let doc = new Questions({
    question_id: q_id,
    product_id: p_id,
    question_body: body,
    question_date: new Date().toISOString(),
    asker_name: name,
    asker_email: email,
    reported: 0,
    question_helpfulness: 0
  })

  //console.log('Document saved',document)

  await doc.save()
  return `saved document`
}

module.exports = {
  getQuestionData,
  addQuestion
}