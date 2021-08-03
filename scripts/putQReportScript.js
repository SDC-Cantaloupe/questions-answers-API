import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {
  let putQReport = http.put('http://localhost:3001/qa/questions/1/report');
  check(putQReport, {
    'postQuestion: status 204': (r) => r.status === 204,
  })
  sleep(1)
}