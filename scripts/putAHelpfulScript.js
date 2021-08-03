import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {
  let putAHelpful = http.put('http://localhost:3001/qa/answers/1/helpful');
  check(putAHelpful, {
    'postQuestion: status 204': (r) => r.status === 204,
  })
  sleep(1)
}