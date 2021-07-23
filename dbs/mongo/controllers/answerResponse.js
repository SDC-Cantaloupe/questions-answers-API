const formatAnswerResponse = (q_id, page, count, answers, answerPhotos) => {
  let result = {
    question: q_id,
    page: page,
    count: count,
    results: []
  }
  console.log(answerPhotos.length)
  answerPhotos.map(photo => {
    console.log(photo)
  })
  answers.map((answer, i) => {
    let answerResult = {...answer}._doc;
    answerResult.id = answerResult.answer_id;
    delete answerResult.question_id;
    delete answerResult.answerer_email;
    delete answerResult.reported;

    answerResult.photos = answerPhotos[i]

    result.results.push(answerResult)
  })

  return result
}

module.exports = {
  formatAnswerResponse
}