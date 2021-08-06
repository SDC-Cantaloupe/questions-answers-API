import http from 'k6/http';
import {sleep, check} from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";


export default function () {

  let getQuestions = http.get(`http://localhost:3001/qa/questions?product_id=${randomIntBetween(1,100000)}&page=1&count=5`);
  check(getQuestions, {
    'getQuestions: status 200': (r) => r.status === 200,
    'getQuestions: got response data': (r) => r.body.length > 0
  })
  sleep(1);
}

