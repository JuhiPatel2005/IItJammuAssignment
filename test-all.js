const http = require('http');

function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, 'http://localhost:3000');
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    });

    req.on('error', (e) => reject(e));

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('Making requests to test middleware logging...\n');
  
  try {
    // Test GET with params
    console.log('1. Testing GET /student/123');
    await makeRequest('GET', '/student/123');
    console.log('   ✓ Done\n');
    
    // Test GET with multiple params
    console.log('2. Testing GET /user/John/25');
    await makeRequest('GET', '/user/John/25');
    console.log('   ✓ Done\n');
    
    // Test GET with query params
    console.log('3. Testing GET /search?course=JavaScript&city=NewYork');
    await makeRequest('GET', '/search?course=JavaScript&city=NewYork');
    console.log('   ✓ Done\n');
    
    // Test POST with body
    console.log('4. Testing POST /register');
    await makeRequest('POST', '/register', { name: 'John', email: 'john@example.com', age: 25 });
    console.log('   ✓ Done\n');
    
    // Test POST login
    console.log('5. Testing POST /login');
    await makeRequest('POST', '/login', { email: 'test@example.com', password: '123456' });
    console.log('   ✓ Done\n');
    
    console.log('All tests completed! Check the nodemon terminal for logs.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

runTests();