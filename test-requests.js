// Simple script to make requests and trigger middleware logs
const http = require('http');

console.log('Starting test requests...\n');
console.log('Watch the nodemon terminal to see the LOGGER middleware output!\n');

// Make a simple GET request
http.get('http://localhost:3000/student/123', (res) => {
  console.log('Request 1 completed: GET /student/123');
  
  // Make another request
  setTimeout(() => {
    http.get('http://localhost:3000/search?course=JavaScript&city=NewYork', (res) => {
      console.log('Request 2 completed: GET /search');
      
      setTimeout(() => {
        console.log('\nAll requests sent!');
        console.log('Check the nodemon terminal above for the LOGGER middleware logs.');
        process.exit(0);
      }, 500);
    });
  }, 500);
});