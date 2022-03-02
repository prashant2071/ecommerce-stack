const express =require ('express')
const app =express();
const productRoute =require('./../src/products/routes/productRoute')

app.use('/products',productRoute)

module.exports=app;
