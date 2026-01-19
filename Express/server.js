const express = require('express')
const satoruJSON = require('./JJK/satoru.json')
const app = express()
const port = 3000

const data = ['Satoru']

app.use(express.json())

app.get('/', (req, res) => {
  res.send(`<body>
            <h1>Data:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
            </body>`)
})

app.get('/dashboard', (req, res) => {
  res.send(`<h1>Dashboard</h1>
            <a href="/">Home</a>`)
})

app.get('/test', (req, res) => {
  res.status(208).send(JSON.stringify(satoruJSON))
})

app.post('/data', (req, res) => {
  const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  console.log(data)
  res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
  data.pop()
  console.log('data deleted: ', data)
  res.sendStatus(203)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
