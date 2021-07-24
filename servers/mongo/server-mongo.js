const express = require('express');
const db = require('../../dbs/mongo')

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
ROUTES
*/
app.get('/test', (req, res) => {
  res.send('hey')
})
app.get('/qa/questions', (req,res) => {
  let query = req.query;

  let p_id = Number(query.product_id)
  let page = 1;
  let count = Number(query.count);

  db.getAllQuestions(p_id, page, count)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('error querying db', err)
    res.status(400).send(typeof err)
  })
})

app.get('/qa/questions/:question_id/answers', (req, res) => {
  let query = req.query;
  let params = req.params

  let q_id = Number(params.question_id)
  let page = Number(query.page)
  let count = Number(query.count)

  db.getAnswers(q_id, page, count).then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('error getting answers', err)
    res.send(400)
  })
})

app.post('/qa/questions', (req,res) => {
  let query = req.query;

  let body = query.body;
  let name = query.name;
  let email = query.email;
  let p_id = query.product_id;

  db.postQuestion(p_id, name, email, body)
  .then(data => {
    res.status(201).send(data)
  })
  .catch(err => {
    console.log('error posting questions', err)
  })
})

app.post('/qa/questions/:question_id/answers', (req, res) => {
  let query = req.query;
  let params = req.params

  let q_id = Number(params.question_id)
  let body = query.body;
  let name = query.name
  let email = query.email
  let photos = query.photos.split('').filter(l => {
    return (l !== '[' && l !== ']')
  }).join('').split(',')


  db.postAnswer(q_id, body, name, email, photos)
  .then(data =>{
    res.status(201).send(data)
  })
  .catch(err => {
    console.log('error posting answer', err)
  })
})

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  let params = req.params;

  let q_id = Number(params.question_id);

  db.markQuestionHelpful(q_id)
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log('error marking question helpful', err)
  })
})

app.put('/qa/questions/:questionid/report', (req, res) => {
  let params = req.params;

  let q_id = Number(params.question_id)

  db.reportQuestion(q_id)
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log('error marking question reported', err)
  })
})

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  let params = req.params;

  let a_id = Number(params.answer_id);

  db.markAnswerHelpful(a_id)
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log('error marking answer helpful', err)
  })
})

app.put('/qa/answers/:answer_id/report', (req, res) => {
  let params = req.params;

  let a_id = Number(params.answer_id);

  db.reportAnswer(a_id)
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log('error marking answer reported', err)
  })
})


//app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})

module.exports = app;