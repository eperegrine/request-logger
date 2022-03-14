var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

var port = process.env.PORT || 3000

const logFileName = path.join(__dirname, 'access.log')
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(logFileName, { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.get("/logs", function (req, res) {
    res.sendFile(logFileName);
});

app.listen(port);