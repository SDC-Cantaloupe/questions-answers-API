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
  console.log(query)
  let p_id = Number(query.product_id)
  let page = 1;
  let count = Number(query.count);

  db.getAllQuestions(p_id, page, count)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    console.log('error querying db', err)
    res.send(500)
  })
})

app.get('/qa/questions/:question_id/answers', (req, res) => {
  let query = req.query;
  let params = req.params

  let q_id = Number(params.question_id)
  let page = Number(query.page)
  let count = Number(query.count)

  db.getAnswers(q_id, page, count).then(data => {
    res.send(data)
  })
})

app.post('/qa/questions', (req,res) => {
  let query = req.query;

  let body = query.body;
  let name = query.name;
  let email = query.email;
  let p_id = query.product_id;

  console.log('this is the query', query)

  db.addNewQuestion(p_id, name, email, body)
  .then(data => res.send(data))
})

// app.post('/qa/questions/[questionid]/answers')

// app.put('qa/questions/[questionid]/helpful')

// app.put('qa/questions/[questionid]/report')

// app.put('qa/answers/[answerid]/helpful')

// app.put('qa/answers/[answerid]/report')


app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})

module.exports = app;