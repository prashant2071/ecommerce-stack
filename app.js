const express =require('express');
const logger = require('./config/logger');
const app =express();
const cors = require('cors');
const morgan = require('morgan');
const process= require('process')
const route =require('./routes/apiRoute');
require('./config/config.sql/database')

const {PORT}=require('./config/envCrediantials').SERVERPORT;


app.use(cors()); 
app.use(express.json());
app.use(morgan('dev'));

app.use('/api',route)








app.listen(PORT || 8081, (err,done)=>{
    const date =new Date().toJSON().split('T')[0]; 
    if(err){
        console.log('-------------------------------------------');
        console.log(' server                           Ecommerce ');
        console.log(` Port                                ${PORT}`);
        console.log(` Date                                ${date}`);
        console.log(`server connection failed at port ${PORT}  ❌ ❌`);
        console.log('-------------------------------------------');
        logger.error(err)

    }
    else{
        console.log('-------------------------------------------');
        console.log(' server                           Ecommerce ');
        console.log(` Port                                ${PORT}`);
        console.log(` Date                                ${date}`);
        console.log(`server connected successfully at port ${PORT} ✅ ✅`);
        console.log('Waiting for database connection ');
        console.log('---------------------------------------------');  
    }
})
process.on("uncaughtException", (err) => {
    logger.error(err);
  });