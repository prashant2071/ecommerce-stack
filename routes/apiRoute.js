const express =require ('express')
const app =express();
const productRoute =require('./../src/sqlRoute/products/routes/productRoute')
console.log('-----------sql route--------------');
app.use('/products',productRoute)

module.exports=app;
