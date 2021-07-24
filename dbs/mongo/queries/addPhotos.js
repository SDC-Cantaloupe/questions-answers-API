const {Answers, Answer_Photos} = require('../models.js');

async function addAnswerPhoto(answerId, url){

  let findHighestP_ID = await Answer_Photos.find().sort({photo_id: -1}).limit(1);

  let photo_id =  findHighestP_ID[0].photo_id + 1;


  let doc = new Answer_Photos({
    photo_id: photo_id,
    answer_id: answerId,
    url: url
  })

  await doc.save()

}

module.exports = {
  addAnswerPhoto
}