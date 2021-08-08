import http from 'k6/http';
import {sleep, check} from 'k6';



export default function () {
  const url = 'http://localhost:3000/qa/questions?product_id=1&page=1&count=5';
  const params = {
    query: {
      product_id: 1,
      page: 1,
      count: 5
    }
  }
  let res = http.get(url);
  check(res, {
    'is status 200': (r) => r.status === 200,
    'check body size': (r) => r.body.length === 3332
  })
  sleep(1);
}

