const express = require('express')
const satoruJSON = require('./JJK/satoru.json')
const app = express()
const port = 3000

const data = ['Satoru']

app.use(express.json())

app.get('/', (req, res) => {
  console.log('yay, I hit an endpoint', req.method)
  res.send(`<body>
            <h1>Data:<h1>
            <p>${JSON.stringify(data)}</p>
            </body>`)
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
  console.log(newEntry)
  data.push(newEntry.name)
  console.log(data)
  res.sendStatus(201)
})

app.delete()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
