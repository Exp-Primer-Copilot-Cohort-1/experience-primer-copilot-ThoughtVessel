// Create web server application 
// Use Node.js to create a web server that listens for HTTP requests on port 3000, 
// and responds with the path of the request URL. 
// For example, if the path is /about, the server should respond with a body containing the string "/about". 
// If the path is /contact, the server should respond with a body containing the string "/contact". 
// If the path is /, the server should respond with a body containing the string "/". 
// If the path is anything else, the server should respond with a status of 404 (Not Found).

// Import the http module
const http = require('http');

// Create a web server
const server = http.createServer((request, response) => {
    // Get the path of the request URL
    const path = request.url;
    // Set the response body
    let body = '';
    // Check the path and set the response body
    if (path === '/about') {
        body = '/about';
    } else if (path === '/contact') {
        body = '/contact';
    } else if (path === '/') {
        body = '/';
    } else {
        response.statusCode = 404;
    }
    // Send the response body
    response.end(body);
});

// Start the server
server.listen(3000);