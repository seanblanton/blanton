// ./index.js
const express = require('express')
const path = require('path')
const compression = require('compression')
const port = 80
const app = express()

var cacheTime = 86400000*7;     // 7 days


// Serve static assets
app.use(compression());
app.use(express.static(path.resolve(__dirname), { maxAge: cacheTime }));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'));
});

app.listen(port)

console.log("server started on port " + port)

