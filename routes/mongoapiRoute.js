const express =require ('express')
const app =express();
const productRoute =require('./../src/nosqlRoute/products/routes/productRoute')

console.log('-----------mongo route--------------')
app.use('/products',productRoute)

module.exports=app;
