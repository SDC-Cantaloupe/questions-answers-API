const {Questions} = require('../models.js');

async function addQuestion(p_id, name, email, body){

  //let findHighestQ_ID = await Questions.find().sort({question_id: -1}).limit(1);

 // let q_id =  findHighestQ_ID[0].question_id + 1;

  let doc = new Questions({
    question_id: 1,
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
  addQuestion
}