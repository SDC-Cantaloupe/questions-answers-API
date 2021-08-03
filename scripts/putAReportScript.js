import http from 'k6/http';
import {sleep, check} from 'k6';

export default function () {
  let putAReport = http.put('http://localhost:3001/qa/answers/1/report');
  check(putAReport, {
    'postQuestion: status 204': (r) => r.status === 204,
  })
  sleep(1)
}