import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {
  let putQHelpful = http.put('http://localhost:3001/qa/questions/1/helpful');
  check(putQHelpful, {
    'postQuestion: status 204': (r) => r.status === 204,
  })
  sleep(1)
}