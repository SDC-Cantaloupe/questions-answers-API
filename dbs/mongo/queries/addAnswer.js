const {Answers, Answer_Photos} = require('../models.js');
const {addAnswerPhoto} = require('./addPhotos.js')

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
  addAnswer
}