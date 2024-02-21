const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
  res.send("Hello from Node API Server")
});


mongoose.connect("mongodb+srv://admin:m9aeRkfXzfjsisrt@backenddb.voqwhyx.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
  console.log("Conneted to the database");
  app.listen('3000', () => {
    console.log("Server running on port 3000")
  });
})
.catch(() => {
  console.log("Connection failed!")
});