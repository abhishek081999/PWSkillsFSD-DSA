const express = require('express');
const app = express();

let counter = 0;

app.get('/', (req, res) => {
  res.json({ counter: counter });
});

app.get('/increment', (req, res) => {
  counter++;
  res.json({ counter: counter });
});

app.get('/decrement', (req, res) => {
  counter--;
  res.json({ counter: counter });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
