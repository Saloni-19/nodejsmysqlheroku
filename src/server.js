const express = require('express');
const ProductAPI = require('./API/ProductAPI')

const app = express();
app.use(express.json());

ProductAPI(app);
app.listen(3001,()=>console.log('Server Started'))