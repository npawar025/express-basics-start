const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
/*import express from "express";
import { products } from "./data.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

//all product api
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

//single product api
app.get("/api/products/:productID", (req, res) => {
  //here :productID in api is route parameter
  const { productID } = req.params;
  // console.log(req.params);

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  // console.log(singleProduct);
  if (!singleProduct) {
    return res.status(404).send("Product not found");
  }
  return res.json(singleProduct);
});

//Query string parameter or url parameter it is called
app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // return res.status(200).send('no product matched ')
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

//server port

app.listen(port, () => {
  console.log("server is running on 5000...");
});
*/