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

  db.getAllQuestions()
  .then(data => {
    res.send(data)
  })



  // db.getQuestions(p_id = 1, page = 1, count = 5)
  // .then(questions => {
  //   let answers = [];
  //   questions.forEach(question => {
  //     let q_id = question.question_id;
  //     answers.push(db.getAnswersToQuestion(q_id,page=1, count = 5))

  //     return Promise.all(answers)
  //   })
  //   .then(answers => {
  //     let results = [];

  //     for (let i = 0 ; i < answers.length; i++) {
  //       questions[i]['answers'] = answers[i];

  //       results.push(questions[i])
  //     }
  //     res.send(results)
  //   })
  })


  //call function with req parameters send to db
    //parameters are product_id, page, count
  //ie getQuestions

//})

app.get('/qa/questions/[questionid]/answers')

app.post('/qa/questions')

app.post('/qa/questions/[questionid]/answers')

app.put('qa/questions/[questionid]/helpful')

app.put('qa/questions/[questionid]/report')

app.put('qa/answers/[answerid]/helpful')

app.put('qa/answers/[answerid]/report')


app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})