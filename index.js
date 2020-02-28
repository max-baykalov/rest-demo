import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
// app.use(bodyParser.json({ type: 'application/json' }));

// JS demo
const a = 3;
let b = 2;
var c = 1;
console.log('Sum: ', a+b+c);

// Demo string http://localhost:3000/
app.get('/', function (req, res) {
  res.send("Hello world!")
});

// Increment 'count' http://localhost:3000/count
let count = 0;
app.get('/count', (req, res) => {
  count++;
  res.send({ count: count });
});


// start server
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});