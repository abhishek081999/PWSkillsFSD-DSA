const express = require('express');
const app = express();

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ random: randomNumber });
});
app.get('/', (req, res) => {
  
  res.json({ "message": "welcome server is up"});
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
