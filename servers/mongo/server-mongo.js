const express = require('express');
const db = require('../../dbs/mongo')

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
ROUTES
*/
app.get('/qa/questions', (req,res) => {
  let query = req.query;
  let p_id = Number(query.product_id)
  let page = Number(query.page);
  let count = Number(query.count);

  db.getAllQuestions(p_id, page, count)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('error querying db', err)
    res.status(400).send(err)
  })
})

app.get('/qa/questions/:question_id/answers', (req, res) => {
  let query = req.query;
  let params = req.params

  let q_id = Number(params.question_id)
  let page = Number(query.page)
  let count = Number(query.count)

  db.getAnswers(q_id, page, count)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log('error getting answers', err)
    res.status(400).send(err)
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
    res.status(400).send('could not post question')
  })
})

app.post('/qa/questions/:question_id/answers', (req, res) => {
  let query = req.query;
  let params = req.params

  let q_id = Number(params.question_id);
  let body = query.body;
  let name = query.name;
  let email = query.email;
  let photos = query.photos || []

  if(typeof query.photos === 'string') {
    try {
      photos = query.photos.split('').filter(l => {
        return (l !== '[' && l !== ']')
      }).join('').split(',')

      if (!photos) {
        throw new Error('Incompatible data type for photos')
      }
    } catch (e) {
      console.error(e)
      res.status(400).send(e)
    }
  }
  db.postAnswer(q_id, body, name, email, photos)
  .then(data =>{
    res.status(201).send(data)
  })
  .catch(err => {
    console.log('error posting answer', err)
    res.status(400).send(err)
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
    res.status(400).send(err)
  })
})

app.put('/qa/questions/:question_id/report', (req, res) => {
  let params = req.params;

  let q_id = Number(params.question_id)

  db.reportQuestion(q_id)
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log('error marking question reported', err)
    res.status(400).send(err)
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
    res.status(400).send(err)
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
    res.status(400).send(err)
  })
})


//app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})

module.exports = app;