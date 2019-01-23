import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 200,
  duration: '180s'
};

let id = Math.floor((Math.random() * 10000000) + 1);

export default function () {
  http.get(`http://localhost:3004/api/restaurants/${id}/reviews`);
  sleep(1);
}
