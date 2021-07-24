const hasAllKeys = (obj, array) => {
  let objKeys = Object.keys(obj);

  for ( let i = 0; i < objKeys.length; i++) {
    if (objKeys[i] !== array[i]) {
      return false
    }
  }
  return true
}

const checkQuestionResponseFormat = (response) => {
  const productKeys = ['product_id', 'results'];
  const questionKeys = ['question_id', 'question_body','question_date','asker_name', 'reported', 'question_helpfulness', 'answers']
  const answerKeys = ['body', 'date', 'answerer_name','helpfulness','id','photos']
  const photoKeys = ['photo_id','answer_id', 'url', '__v']

  let status = true;

  if (!hasAllKeys(response, productKeys)) {
    status = false;
  } else {
    let results = response.results;
    results.map(result => {
      if (!hasAllKeys(result, questionKeys)) {
        status=false
      } else {
        let answers = result.answers
        for (let key in answers) {
          let answer = answers[key];

          if (!hasAllKeys(answer, answerKeys)) {
            status=false
          } else {
            let photos = answer.photos;
            photos.map(photo => {
              if (!hasAllKeys(photo, photoKeys)) {
                status = false
              }
            })
          }
        }
      }
    })
  }
  return status
}

module.exports = {
  checkQuestionResponseFormat
}