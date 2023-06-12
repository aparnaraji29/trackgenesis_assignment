const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://aparnaraji2000:Aparna29@cluster0.bswwvwk.mongodb.net/Product?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log('mongodb connected successfully')
});

// Define a product schema and model using Mongoose
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  category: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);

// Define a route to fetch products from the API and store them in the database
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    
    // Save the products in the database
    await Product.insertMany(products);
    
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
