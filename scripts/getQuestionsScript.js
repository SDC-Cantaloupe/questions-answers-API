import http from 'k6/http';
import {sleep, check} from 'k6';



export default function () {

  let getQuestions = http.get('http://localhost:3001/qa/questions?product_id=1&page=1&count=5');
  check(getQuestions, {
    'getQuestions: status 200': (r) => r.status === 200,
    'getQuestions: correct response': (r) => r.body.length === 3332,
    'something': (r) => console.log(r)
  })
  sleep(1);
}

