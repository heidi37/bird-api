const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
let data = require('./data')

app.use(cors())
// Use express.static to serve the "images" folder
app.use('/images', express.static(path.join(__dirname, 'images')));

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