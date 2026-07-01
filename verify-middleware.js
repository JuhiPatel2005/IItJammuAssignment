const logger = require('./middleware/logger');

// Simulate a request
const mockReq = {
  originalUrl: '/test',
  method: 'GET',
  ip: '127.0.0.1'
};

console.log('Testing custom middleware directly...\n');
logger(mockReq, {}, () => {
  console.log('\nMiddleware executed successfully!');
});