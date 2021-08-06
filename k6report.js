// GET @ 100 RPS

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 100,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  const BASE_URL = `http://localhost:3003/dp/${rndId}`;

  http.get(`${BASE_URL}`);
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 100.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 3001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  100 iters/s

     data_received..................: 1.7 MB 57 kB/s
     data_sent......................: 270 kB 9.0 kB/s
     http_req_blocked...............: avg=13.67µs min=2µs      med=5µs    max=629µs  p(90)=6µs    p(95)=13µs
     http_req_connecting............: avg=6.75µs  min=0s       med=0s     max=241µs  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=1.67ms  min=638µs    med=1.63ms max=7.61ms p(90)=2.05ms p(95)=2.28ms
       { expected_response:true }...: avg=1.67ms  min=638µs    med=1.63ms max=7.61ms p(90)=2.05ms p(95)=2.28ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 3001
     http_req_receiving.............: avg=57.46µs min=21µs     med=57µs   max=179µs  p(90)=74µs   p(95)=82µs
     http_req_sending...............: avg=23.82µs min=8µs      med=22µs   max=102µs  p(90)=30µs   p(95)=42µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s     max=0s     p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=1.59ms  min=597µs    med=1.54ms max=7.54ms p(90)=1.96ms p(95)=2.19ms
     http_reqs......................: 3001   100.031076/s
     iteration_duration.............: avg=1.82ms  min=688.87µs med=1.78ms max=7.69ms p(90)=2.2ms  p(95)=2.61ms
     iterations.....................: 3001   100.031076/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100

// GET @ 1000 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  const BASE_URL = `http://localhost:3003/dp/${rndId}`;

  http.get(`${BASE_URL}`);
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1000.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 30001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  1000 iters/s

     data_received..................: 17 MB  567 kB/s
     data_sent......................: 2.7 MB 90 kB/s
     http_req_blocked...............: avg=2.23µs  min=0s       med=2µs      max=638µs   p(90)=3µs      p(95)=3µs
     http_req_connecting............: avg=236ns   min=0s       med=0s       max=188µs   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=1.39ms  min=371µs    med=427µs    max=88.73ms p(90)=866µs    p(95)=2.36ms
       { expected_response:true }...: avg=1.39ms  min=371µs    med=427µs    max=88.73ms p(90)=866µs    p(95)=2.36ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 30001
     http_req_receiving.............: avg=21.18µs min=10µs     med=19µs     max=15.17ms p(90)=27µs     p(95)=32µs
     http_req_sending...............: avg=8.38µs  min=4µs      med=8µs      max=210µs   p(90)=10µs     p(95)=12µs
     http_req_tls_handshaking.......: avg=0s      min=0s       med=0s       max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=1.36ms  min=351µs    med=401µs    max=79.98ms p(90)=829µs    p(95)=2.33ms
     http_reqs......................: 30001  1000.034067/s
     iteration_duration.............: avg=1.43ms  min=399.52µs med=468.45µs max=88.79ms p(90)=915.16µs p(95)=2.43ms
     iterations.....................: 30001  1000.034067/s
     vus............................: 100    min=100       max=100
     vus_max........................: 100    min=100       max=100

// GET @ 10000 RPS

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3003/dp/9000000';

  http.get(`${BASE_URL}`);
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 10000.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)

WARN[0000] Insufficient VUs, reached 200 active VUs and cannot initialize more  executor=constant-arrival-rate scenario=constant_request_rate

running (0m30.1s), 000/200 VUs, 61778 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/200 VUs  30s  10000 iters/s

     data_received..................: 35 MB  1.2 MB/s
     data_sent......................: 5.6 MB 185 kB/s
     dropped_iterations.............: 238223 7920.833361/s
     http_req_blocked...............: avg=1.82µs  min=0s      med=1µs     max=1.32ms   p(90)=2µs      p(95)=2µs
     http_req_connecting............: avg=291ns   min=0s      med=0s      max=401µs    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=97.09ms min=86.57ms med=94.21ms max=244.67ms p(90)=106.45ms p(95)=113.93ms
       { expected_response:true }...: avg=97.09ms min=86.57ms med=94.21ms max=244.67ms p(90)=106.45ms p(95)=113.93ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 61778
     http_req_receiving.............: avg=44.53µs min=10µs    med=17µs    max=28.8ms   p(90)=24µs     p(95)=28µs
     http_req_sending...............: avg=6.87µs  min=3µs     med=6µs     max=349µs    p(90)=8µs      p(95)=10µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=97.04ms min=86.55ms med=94.18ms max=244.58ms p(90)=106.29ms p(95)=113.83ms
     http_reqs......................: 61778  2054.097394/s
     iteration_duration.............: avg=97.13ms min=86.61ms med=94.25ms max=244.94ms p(90)=106.49ms p(95)=113.98ms
     iterations.....................: 61778  2054.097394/s
     vus............................: 200    min=200       max=200
     vus_max........................: 200    min=200       max=200

// GET @ 100000 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 100000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  let rndId = Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
  const BASE_URL = `http://localhost:3003/dp/${rndId}`;

  http.get(`${BASE_URL}`);
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 400 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 100000.00 iterations/s for 30s (maxVUs: 100-400, gracefulStop: 30s)

WARN[0000] Insufficient VUs, reached 400 active VUs and cannot initialize more  executor=constant-arrival-rate scenario=constant_request_rate

running (0m30.2s), 000/400 VUs, 61522 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/400 VUs  30s  100000 iters/s

     data_received..................: 35 MB   1.2 MB/s
     data_sent......................: 5.5 MB  184 kB/s
     dropped_iterations.............: 2938480 97418.383659/s
     http_req_blocked...............: avg=5.4µs    min=0s       med=1µs      max=2.64ms   p(90)=2µs      p(95)=2µs
     http_req_connecting............: avg=2.11µs   min=0s       med=0s       max=1.45ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=195.34ms min=164.56ms med=187.17ms max=433.46ms p(90)=214.99ms p(95)=226.92ms
       { expected_response:true }...: avg=195.34ms min=164.56ms med=187.17ms max=433.46ms p(90)=214.99ms p(95)=226.92ms
     http_req_failed................: 0.00%   ✓ 0            ✗ 61522
     http_req_receiving.............: avg=68.2µs   min=11µs     med=17µs     max=53ms     p(90)=22µs     p(95)=27µs
     http_req_sending...............: avg=7.45µs   min=3µs      med=5µs      max=2.98ms   p(90)=8µs      p(95)=9µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=195.27ms min=164.53ms med=187.13ms max=433.43ms p(90)=214.84ms p(95)=226.57ms
     http_reqs......................: 61522   2039.617013/s
     iteration_duration.............: avg=195.39ms min=164.61ms med=187.2ms  max=433.63ms p(90)=215.03ms p(95)=226.97ms
     iterations.....................: 61522   2039.617013/s
     vus............................: 400     min=400        max=400
     vus_max........................: 400     min=400        max=400

// POST @ 100 RPS

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 100,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3003/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;

  http.post(`${BASE_URL}`, JSON.stringify({images: [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 100.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)


running (0m30.0s), 000/100 VUs, 3001 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/100 VUs  30s  100 iters/s

     data_received..................: 1.2 MB 40 kB/s
     data_sent......................: 570 kB 19 kB/s
     http_req_blocked...............: avg=10.24µs min=2µs    med=3µs    max=2.63ms   p(90)=5µs    p(95)=12µs
     http_req_connecting............: avg=4.96µs  min=0s     med=0s     max=2.58ms   p(90)=0s     p(95)=0s
     http_req_duration..............: avg=2.69ms  min=988µs  med=1.5ms  max=178.83ms p(90)=2.23ms p(95)=2.84ms
       { expected_response:true }...: avg=2.69ms  min=988µs  med=1.5ms  max=178.83ms p(90)=2.23ms p(95)=2.84ms
     http_req_failed................: 0.00%  ✓ 0          ✗ 3001
     http_req_receiving.............: avg=44.08µs min=14µs   med=40µs   max=225µs    p(90)=58µs   p(95)=69µs
     http_req_sending...............: avg=22.45µs min=14µs   med=19µs   max=620µs    p(90)=30µs   p(95)=40µs
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=2.62ms  min=946µs  med=1.43ms max=178.77ms p(90)=2.14ms p(95)=2.78ms
     http_reqs......................: 3001   100.029172/s
     iteration_duration.............: avg=2.83ms  min=1.07ms med=1.62ms max=178.97ms p(90)=2.45ms p(95)=3.05ms
     iterations.....................: 3001   100.029172/s
     vus............................: 100    min=100      max=100
     vus_max........................: 100    min=100      max=100

// POST @ 1000 RPS

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 1000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3003/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;

  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 1000.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)

WARN[0000] Insufficient VUs, reached 200 active VUs and cannot initialize more  executor=constant-arrival-rate scenario=constant_request_rate

running (0m30.1s), 000/200 VUs, 28390 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/200 VUs  30s  1000 iters/s

     data_received..................: 11 MB  373 kB/s
     data_sent......................: 5.4 MB 179 kB/s
     dropped_iterations.............: 1611   53.515214/s
     http_req_blocked...............: avg=4.65µs   min=1µs      med=3µs      max=950µs    p(90)=5µs      p(95)=8µs
     http_req_connecting............: avg=795ns    min=0s       med=0s       max=380µs    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=129.45ms min=663µs    med=134.46ms max=356.1ms  p(90)=234.8ms  p(95)=257.99ms
       { expected_response:true }...: avg=129.45ms min=663µs    med=134.46ms max=356.1ms  p(90)=234.8ms  p(95)=257.99ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 28390
     http_req_receiving.............: avg=34.5µs   min=12µs     med=29µs     max=773µs    p(90)=53µs     p(95)=66µs
     http_req_sending...............: avg=19.55µs  min=7µs      med=15µs     max=1.19ms   p(90)=31µs     p(95)=41µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=129.4ms  min=630µs    med=134.42ms max=356.02ms p(90)=234.76ms p(95)=257.91ms
     http_reqs......................: 28390  943.07692/s
     iteration_duration.............: avg=129.56ms min=719.38µs med=134.58ms max=356.34ms p(90)=234.9ms  p(95)=258.1ms
     iterations.....................: 28390  943.07692/s
     vus............................: 200    min=200     max=200
     vus_max........................: 200    min=200     max=200

// POST @ 10000 RPS

export let options = {
  scenarios: {
    constant_request_rate: {
      executor: "constant-arrival-rate",
      rate: 10000,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 100,
      maxVUs: 200,
    },
  },
};
export default function () {
  const BASE_URL = 'http://localhost:3003/images';
  let rndPic = Math.floor(Math.random() * 1001);
  let imgUrl = `https://picsum.photos/id/${rndPic}/200/300`;

  http.post(`${BASE_URL}`, JSON.stringify({'images': [imgUrl]}), { headers: { 'Content-Type': 'application/json' } });
}

Mac-mini:ProductGallery DevonPoston$ k6 run k6script.js

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: k6script.js
     output: -

  scenarios: (100.00%) 1 scenario, 200 max VUs, 1m0s max duration (incl. graceful stop):
           * constant_request_rate: 10000.00 iterations/s for 30s (maxVUs: 100-200, gracefulStop: 30s)

WARN[0000] Insufficient VUs, reached 200 active VUs and cannot initialize more  executor=constant-arrival-rate scenario=constant_request_rate

running (0m30.1s), 000/200 VUs, 30801 complete and 0 interrupted iterations
constant_request_rate ✓ [======================================] 000/200 VUs  30s  10000 iters/s

     data_received..................: 12 MB  404 kB/s
     data_sent......................: 5.8 MB 194 kB/s
     dropped_iterations.............: 269200 8947.670817/s
     http_req_blocked...............: avg=3.78µs   min=1µs     med=2µs      max=1.32ms   p(90)=3µs      p(95)=4µs
     http_req_connecting............: avg=794ns    min=0s      med=0s       max=485µs    p(90)=0s       p(95)=0s
     http_req_duration..............: avg=194.82ms min=88.02ms med=184.86ms max=420.31ms p(90)=237.12ms p(95)=262.45ms
       { expected_response:true }...: avg=194.82ms min=88.02ms med=184.86ms max=420.31ms p(90)=237.12ms p(95)=262.45ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 30801
     http_req_receiving.............: avg=36.5µs   min=12µs    med=31µs     max=2.48ms   p(90)=55µs     p(95)=67µs
     http_req_sending...............: avg=15.42µs  min=7µs     med=13µs     max=606µs    p(90)=23µs     p(95)=28µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=194.77ms min=87.98ms med=184.81ms max=420.25ms p(90)=237.06ms p(95)=262.41ms
     http_reqs......................: 30801  1023.763777/s
     iteration_duration.............: avg=194.92ms min=88.09ms med=184.95ms max=420.41ms p(90)=237.22ms p(95)=262.57ms
     iterations.....................: 30801  1023.763777/s
     vus............................: 200    min=200       max=200
     vus_max........................: 200    min=200       max=200