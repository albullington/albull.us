const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => res.send('Hello, client'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

setInterval(() => {
  http.get('http://www.albull.us');
}, 600000); //ping server every 10 mins