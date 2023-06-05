const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})

/* 
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 5000;
const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
const __dirname = path.dirname(__filename);
// console.log(__dirname);

//while using es6 modules directly using __direname to resolve the path wont work throws reference error solution found at 
//https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(port, () => {
  console.log("server is on");
});

*/