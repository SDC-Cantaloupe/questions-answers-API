import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {

  let getAnswers = http.get('http://localhost:3001/qa/questions/3518962/answers?page=1&count=5');
check(getAnswers, {
  'getAnswers: status 200': (r) => r.status === 200,
  'getAnswers: correct response': (r) => r.body.length === 611
})
sleep(1)

}
