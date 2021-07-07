const express = require('express') // importing express function
const app = express() // that is used to create an express application stored in the app variable

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]

  app.get('/', (request, response) => { // an event handler, that is used to handle HTTP GET requests made to the application's / root
    // request parameter contains all of the information of the HTTP request
    // response parameter is used to define how the request is responded to.
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/notes', (request, response) => { // an event handler, that handles HTTP GET requests made to the notes path of the application
    response.json(notes) // request is responded to with the json method of the response object
  })
  
  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)