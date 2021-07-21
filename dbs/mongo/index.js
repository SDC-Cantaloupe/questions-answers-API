const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('./models.js');
const {getQuestionData} = require('./queries/getQuestionData.js')


mongoose.connect('mongodb://localhost/qa', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log('Connnectedto QA DB')})

const getAllQuestions = () => {
  return getQuestionData();
}

// async function getAllQuestions(p_id, page, count) {
//   let questions = await Questions.find({product_id:1}).limit(5);

//   let answers = await Promise.all(questions.map(async (question) => {
//     let answer = await Answers.find({question_id: question.question_id}).limit(5);
//     return answer
//   }))


//   let answerPhotos = await Promise.all(answers.map(async (answerGroup) => {
//     let photos = await Promise.all(answerGroup.map(async (answer) => {
//       let photo =  await Answer_Photos.find({answer_id: answer.answer_id})
//       return photo
//     }));
//     return photos
//   }))

//   let result = {
//     'product_id': 1,
//     'results': []
//   }

//   for ( let i = 0; i < answers.length; i++) {
//     let questionResult = {...questions[i]}._doc

//     questionResult.answers = answers[i]

//     questionResult.answers.map((result,j) => {
//       let resultWithPhotos = {...result}._doc;

//       resultWithPhotos.photos = answerPhotos[i][j];
//     })
//     result.results.push(questionResult)
//   }
//   return result
// }

module.exports = {
  getAllQuestions
}