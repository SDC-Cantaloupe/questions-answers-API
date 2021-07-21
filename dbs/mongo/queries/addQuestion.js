const {Questions} = require('../models.js');

async function addQuestion(p_id, name, email, body){

  let findHighestQ_ID = await Questions.find().sort({question_id: -1}).limit(1);

  let q_id =  findHighestQ_ID[0].question_id + 1;
  console.log(q_id)

  let document = {
    question_id: q_id,
    product_id: p_id,
    question_body: body,
    question_date: new Date().toISOString(),
    asker_name: name,
    asker_email: email,
    reported: 0,
    question_helpfulness: 0
  }

  console.log('Document saved',document)

  await Questions.create(document).then(console.log('saved document!!!'))
  return `saved ${document}`
}

module.exports = {
  addQuestion
}