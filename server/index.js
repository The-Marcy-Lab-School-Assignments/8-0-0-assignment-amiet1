const express = require('express');
const app = express();


const serveAbout = (req, res, next) => res.send('<h1>Hello Tahj</h1>')

const servePersonal = (req, res, next) => res.send('<h1> Where are you from?</h1>')

//* Two controllers send a data response

/* FEEDBACK: The data you're sending back could have 
  a better structure. You're returning an array of separate
  objects, but those objects all have a single data value
  related to you. Instead, just send back a single object:
  
  const data = { name: 'Tahj', age: 21, favColor: 'blue'}
  */
const serveData = (req, res, next) => {
  const data = [{ name: 'Tahj' }, { age: '21' }, { favColor: 'blue' }];
  res.send(data);
}

/* FEEDBACK: Nice! */
const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`hello ${name}`);
}


app.get('/about', serveAbout);
app.get('/personal', servePersonal);
app.get('/api/data', serveData);
app.get('/api/hello', serveHello);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is  running on http://localhost:${port}`);
});