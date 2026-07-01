const http = require('http');

console.log('=== Making test requests to trigger middleware logs ===\n');

const endpoints = [
  { method: 'GET', path: '/' },
  { method: 'GET', path: '/student/123' },
  { method: 'GET', path: '/user/John/25' },
  { method: 'GET', path: '/search?course=JavaScript&city=NewYork' },
  { method: 'POST', path: '/register', body: { name: 'John', email: 'john@example.com', age: 25 } },
  { method: 'POST', path: '/login', body: { email: 'test@example.com', password: '123456' } }
];

let delay = 0;
endpoints.forEach((endpoint) => {
  setTimeout(() => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: endpoint.path,
      method: endpoint.method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log(`✓ ${endpoint.method} ${endpoint.path} - Status: ${res.statusCode}`);
      });
    });

    req.on('error', (e) => console.error(`✗ ${endpoint.method} ${endpoint.path} - Error:`, e.message));

    if (endpoint.body) {
      req.write(JSON.stringify(endpoint.body));
    }
    req.end();
  }, delay);
  
  delay += 500;
});