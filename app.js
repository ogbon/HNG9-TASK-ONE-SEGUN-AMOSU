const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use((req,res) => {
   res.status(200).send({
     slackUsername: 'segun-amosu',
     backend: true,
     age: 40,
     bio: 'I am a NodeJS backend developer'
   })
})

app.listen(PORT)
