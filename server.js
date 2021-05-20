
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const fs = require("fs");
const path = require("path");
const logFolder = "logs";

let filename = path.join(logFolder,"hookLog" + new Date().toISOString().substr(0,19) + ".log");

let logFolderExists = fs.existsSync(logFolder);
if (!logFolderExists) {
  fs.mkdirSync(logFolder);
}

console.log("Will write logs to:", filename);

function addToLog(data) {
  fs.appendFileSync(filename, data + "$$\n")
}

app.post('/', (req, res) => {
  console.log("POST req.body",req.body);
  res.send('Done');
  addToLog(JSON.stringify(req.body))
})

app.get('/', (req, res) => {
  console.log("GET req.body",req.body);
  res.send('Done');
  addToLog(JSON.stringify(req.body))
})

app.put('/', (req, res) => {
  console.log("PUT req.body",req.body);
  res.send('Done');
  addToLog(JSON.stringify(req.body))
})

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});