const express = require('express');  
const app = express();


const serveAbout = (req,res,next) => res.send('<h1>Hello Tahj</h1>')

const servePersonal = (req,res,next) => res.send('<h1> Where are you from?</h1>')

//* Two controllers send a data response

    const serveData = (req, res, next) => {
    const data = [{ name: 'Tahj' }, { age: '21' }, { favColor: 'blue' }];
    res.send(data);
    }

    const serveHello = (req, res, next) => {
        const name = req.query.name || "stranger";
        res.send(`hello ${name}`);
    }


app.get('/about', serveAbout);
app.get('/personal',servePersonal);
app.get('/api/data', serveData);
app.get('/api/hello', serveHello)

const port = 8080;
app.listen(port, () => {
  console.log(`Server is  running on http://localhost:${port}`);
});