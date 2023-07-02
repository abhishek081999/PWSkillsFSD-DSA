import express from "express"
// const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/instagram', (req, res) => {
    res.send('you have visited instagram!')
  })
export default app;