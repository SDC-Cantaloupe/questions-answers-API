const mongoose = require('mongoose');
const {Questions, Answers, Answer_Photos} = require('../models.js');

// const listQuestions = (product_id, page, count, callback) => {

//   Questions.find({product_id: product_id}, (err, data) => {
//     callback(data)
//   }).limit(count)

  // Questions.find({product_id: 1}, (err, data) => {
  //   data.map(question => {
  //     Answers.find({question_id: question.question_id}, (err, data) => {
  //       console.log(data)
  //     })
  //   })
  // }).limit(2)
  // console.log('listQuestions query')
  // let questions = await Questions.find({product_id: 1});

  // console.log(questions)

  //let answerTest = await Answers.find({question_id: 1});

  // console.log('questions', questions)
  // console.log('answers', answerTest)
  //needs to inclue parameters of (product_id, page, count)
  //use a variable for limit and a variable for amout display
  //with a sort function? to have pages
  //aggregate answers and photos of answers
  //or mongoose paginate package
  //needs to ignore reported questions
  //needs page input default 1,
  //needs count input default 5
//}

async function getQuestionData(p_id, page, count) {
  let questions = await Questions.find({product_id:1}, {_id: 0}).limit(5);

  let answers = await Promise.all(questions.map(async (question) => {
    let answer = await Answers.find({question_id: question.question_id}, {_id: 0}).limit(5);
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
    'product_id': 1,
    'results': []
  }

  for ( let i = 0; i < answers.length; i++) {
    let questionResult = {...questions[i]}._doc

    questionResult.answers = answers[i]

    questionResult.answers.map((result,j) => {
      let resultWithPhotos = {...result}._doc;

      resultWithPhotos.photos = answerPhotos[i][j];
    })
    result.results.push(questionResult)
  }
  return result
}

module.exports = {
  getQuestionData
}