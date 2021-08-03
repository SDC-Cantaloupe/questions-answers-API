import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {
  let postQuestion = http.post('http://localhost:3001/qa/questions?body=test&name=test&email=test@email.com&product_id=3');
  check(postQuestion, {
    'postQuestion: status 201': (r) => r.status === 201,

  })
  sleep(1)

}