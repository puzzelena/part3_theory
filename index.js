
const express = require('express') // importing express function
const app = express() // that is used to create an express application stored in the app variable

app.use(express.json()) // access the data

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
  
  app.get('/api/notes/:id', (request, response) => { // will handle all HTTP GET requests, that are of the form /api/notes/SOMETHING, where SOMETHING is an arbitrary string
    const id = Number(request.params.id) // The id parameter in the route of a request, can be accessed through the request object
    console.log(id)
    const note = notes.find(note => {
        console.log(note.id, typeof note.id, id, typeof id, note.id === id) // In JavaScript, the "triple equals" comparison === considers all values of different types to not be equal by default, meaning that 1 is not '1'
        note.id === id // find method of arrays is used to find the note with an id that matches the parameter.
    console.log(note)
    if (note) {
        response.json(note)
      } else {
        response.status(404).end() // Since no data is attached to the response, we use the status method for setting the status, 
      } // The note is then returned to the sender of the request
  })
  })

/*   app.delete('/api/notes/:id', (request, response) => { // Deletion happens by making an HTTP DELETE request to the url of the resource
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  }) */

  app.post('/api/notes', (request, response) => { // The event handler function can access the data from the body property of the request object
    const note = request.body // Without the json-parser, the body property would be undefined
    console.log(note)
    response.json(note)
  })
  
  
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
