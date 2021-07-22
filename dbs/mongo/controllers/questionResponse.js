const formatResponse = (p_id, questionData, answerData, photoData) => {
  let result = {
    'product_id': p_id,
    'results': []
  }

  for ( let i = 0; i < answerData.length; i++) {
    let questionResult = {...questionData[i]}._doc

    delete questionResult.product_id;
    delete questionResult.asker_email;

    let answersObj = {};

    answerData[i].map(answer => {
      let answerResult = {...answer}._doc;
      answerResult.id = answerResult.answer_id;
      delete answerResult.answer_id;
      delete answerResult.question_id;
      delete answerResult.answerer_email;
      delete answerResult.reported;

      answersObj[answerResult.id] = answerResult
    })

    questionResult.answers = answersObj;

    Object.values(questionResult.answers).forEach((id, index) => {
      let answer = id;
      answer.photos = photoData[i][index]
    })

    result.results.push(questionResult)
  }
  return result
}

module.exports = {
  formatResponse
}