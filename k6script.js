import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10000,
      timeUnit: "1s",
      duration: "45s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3003/dp/9000000';

  http.get(`${BASE_URL}`);
}