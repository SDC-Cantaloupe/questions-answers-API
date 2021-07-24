const {Answers, Answer_Photos} = require('../models.js');
const {formatAnswerResponse} = require('../controllers/answerResponse.js')

async function getAnswerData(q_id, page, count) {

  let answers = await Answers.find({question_id: q_id, reported:0}, {_id: 0}).limit(count);

  let answerPhotos = await Promise.all(answers.map(async (answer) => {
    let photos = await Answer_Photos.find({answer_id: answer.answer_id}, {_id:0});
    return photos
  }))
  return formatAnswerResponse(q_id, page, count, answers, answerPhotos)
}

async function addAnswer(q_id, body, name, email, photos){

  let findHighestA_ID = await Answers.find().sort({answer_id: -1}).limit(1);

  let a_id =  findHighestA_ID[0].answer_id + 1;

  if (photos.length > 0) {
    await Promise.all(photos.map(async (photo) => {
      await addAnswerPhoto(a_id, photo)
    }))
  }

  let doc = new Answers({
    answer_id: a_id,
    question_id: q_id,
    body: body,
    date: new Date().toISOString(),
    answerer_name: name,
    answerer_email: email,
    reported: 0,
    helpfulness: 0
  })

  await doc.save()

}

module.exports = {
  getAnswerData,
  addAnswer
}