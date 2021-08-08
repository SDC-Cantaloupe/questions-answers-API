const formatAnswerResponse = (q_id, page, count, answers, answerPhotos) => {
  let result = {
    question: q_id,
    page: page,
    count: count,
    results: []
  }
  answers.map((answer, i) => {
    let answerResult = {...answer}._doc;
    answerResult.id = answerResult.answer_id;
    delete answerResult.question_id;
    delete answerResult.answerer_email;
    delete answerResult.reported;

    if (answerResult.__v >= 0) {
      delete answerResult.__v
    }

    answerResult.photos = answerPhotos[i]

    result.results.push(answerResult)
  })

  return result
}

module.exports = {
  formatAnswerResponse
}