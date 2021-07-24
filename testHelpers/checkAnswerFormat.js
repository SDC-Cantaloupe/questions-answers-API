const {hasAllKeys} = require('./hasAllKeys.js')

const checkAnswerResponseFormat = (response) => {
  const responseKeys = ['question', 'page', 'count', 'results'];
  const answerKeys = ['answer_id', 'body', 'date', 'answerer_name', 'helpfulness', 'id', 'photos'];
  const photoKeys = ['photo_id', 'answer_id', 'url', '__v'];

  let status = true;

  if (!hasAllKeys(response, responseKeys)) {
      status = false
  } else {
      let answers = response.results;

      answers.map(answer => {
          if (!hasAllKeys(answer, answerKeys)) {
              status = false
          } else {
              let photos = answer.photos;

              photos.map(photo => {
                  if (!hasAllKeys(photo, photoKeys)) {
                      status = false
                  }
              })
          }
      })
  }
  return status
}

module.exports = {
  checkAnswerResponseFormat
}