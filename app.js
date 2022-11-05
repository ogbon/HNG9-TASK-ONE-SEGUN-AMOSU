const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/arithmetic', (req, res) => {
  const { operation_type, x, y } = req.body

  let result = 0
  if ((operation_type !== 'addition') && (operation_type !== 'subtraction')
    && (operation_type !== 'multiplication')) {
    operation_type = "Not Available"

  }
  if (operation_type === 'addition') {
    result = Number.parseInt(x) + Number.parseInt(y)
  }
  if (operation_type === 'subtraction') {
    result = Number.parseInt(x) - Number.parseInt(y)
  }
  if (operation_type === 'multiplication') {
    result = Number.parseInt(x) * Number.parseInt(y)
  }
  res.status(200).send({
    slackUsername: 'segun-amosu',
    result,
    operation_type
  })
})

app.use((req, res) => {
  res.status(200).send({
    slackUsername: 'segun-amosu',
    backend: true,
    age: 40,
    bio: 'I am a NodeJS backend developer'
  })
})

app.listen(PORT)
