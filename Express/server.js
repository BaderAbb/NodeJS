const express = require('express')
const satoruJSON = require('./JJK/satoru.json')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  console.log('yay, I hit an endpoint', req.method)
  res.send('<h1>Hello world!!</h1>')
})

app.get('/test', (req, res) => {
  console.log('yay, I hit another test endpoint', req.method)
  res.sendStatus(200)
})

app.get('/gojo', (req, res) => {
  res.send(JSON.stringify(satoruJSON))
})

app.post('/data', (req, res) => {
  const newEntry = req.body
  res.sendStatus(201)
  console.log(newEntry)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
