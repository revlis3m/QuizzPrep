const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
  res.send('Bonjour');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
