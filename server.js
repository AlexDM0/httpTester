const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.post('/', (req, res) => {
  console.log("POST req.body",req.body);
  res.send('Done');
})

app.get('/', (req, res) => {
  console.log("GET req.body",req.body);
  res.send('Done');
})
app.put('/', (req, res) => {
  console.log("PUT req.body",req.body);
  res.send('Done');
})

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
