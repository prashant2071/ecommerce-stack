const Sequelize = require('sequelize');
const {DB} =require('../envCrediantials');
const logger = require('../logger');

const sequelize =new Sequelize(DB.NAME,DB.USERNAME,DB.PASSWORD,{
    host:DB.HOST,
    port:DB.PORT,
    dialect:DB.DIALECT,
    logging:false,
    pool:{
        max:10,
        min:0,
        acquire:30000,
        idle:10000

    }
})

sequelize.sync().then(()=>{
    console.log('Database connected successfully ✅ ✅ ✅') //for emoji :check_mark
}).catch((err)=>{
    console.error('Database connection failed! ❌ ❌',err)  //for cross :x
    logger.error("the error is database",err)
})
const products = require('../../src/sqlRoute/products/models/products')(sequelize,Sequelize) 

module.exports={
    sequelize,
    products
}