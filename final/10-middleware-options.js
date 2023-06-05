const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//  req => middleware => res

// app.use([logger, authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
/*import express from "express";
import logger from "./logger.js";
import authorize from "./authorize.js";
import morgan from "morgan";

const app = express();
const port = 5000;

//middleware is basically function to avoid repititation of  same code or functionality in every route or some route
// app.use([logger, authorize]);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});
//server port

app.listen(port, () => {
  console.log("server is running on 5000...");
});
*/