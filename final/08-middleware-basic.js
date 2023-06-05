const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

/*import express from "express";

const app = express();
const port = 5000;

//middleware is basically function to avoid repititation of  same code or functionality in every route or some route

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("home");
});

app.get("/about", logger, (req, res) => {
  res.send("about");
});
//server port

app.listen(port, () => {
  console.log("server is running on 5000...");
});
*/
