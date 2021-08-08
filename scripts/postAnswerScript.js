import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {
  let postAnswer = http.post('http://localhost:3001/qa/questions/2/answers?body=test&name=test&email=test@gmail.com&photos=[]');
  check(postAnswer, {
    'postQuestion: status 201': (r) => r.status === 201,
  })
  sleep(1)
}