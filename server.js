const express = require('express')
const app = express()
let data = require('./data')

app.get('/', (request, response) => {
  response.send(data)
})

app.get('/api/birds/:name',(request, response) => {
  const birdName = request.params.name
  if(data[birdName]){
      response.json(data[birdName])
  }else{
      response.json(data['unknown'])
  }
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})