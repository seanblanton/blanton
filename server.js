// ./index.js
const express = require('express')
const path = require('path')
const compression = require('compression')
const port = process.env.PORT || 8080
const app = express()

// Serve static assets
app.use(express.static(path.resolve(__dirname)));
app.use(compression())

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.listen(port)

console.log("server started on port " + port)

