const dotenv =require('dotenv');
dotenv.config();

module.exports.SERVERPORT={
    PORT:process.env.PORT
}
module.exports.DB ={
    NAME:process.env.DB_NAME,
    DIALECT:process.env.DB_DIALECT,
    HOST:process.env.DB_HOST,
    USERNAME:process.env.DB_USERNAME,
    PASSWORD:process.env.DB_PASSWORD,
    PORT:process.env.DB_PORT
}