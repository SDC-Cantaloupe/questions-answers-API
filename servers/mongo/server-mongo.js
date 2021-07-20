const express = require('express');
//connect to db

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
ROUTES
*/

app.get('/qa/questions', (req,res) => {

})

app.get('/qa/questions/[questionid]/answers')

app.post('/qa/questions')

app.post('/qa/questions/[questionid]/answers')

app.put('qa/questions/[questionid]/helpful')

app.put('qa/questions/[questionid]/report')

app.put('qa/answers/[answerid]/helpful')

app.put('qa/answers/[answerid]/report')


app.listen(PORT, () => {console.log(`Listening at ${PORT}`)})