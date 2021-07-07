const http = require('http') //  the application imports Node's built-in web server module

const app = http.createServer((request, response) => { // createServer method of the http module to create a new web server
  response.writeHead(200, { 'Content-Type': 'text/plain' }) // The request is responded to with the status code 200, with the Content-Type header set to text/plain
  response.end('Hello World') // the content of the site to be returned set to Hello World
})
// The last rows bind the http server assigned to the app variable, to listen to HTTP requests sent to the port 3001
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)