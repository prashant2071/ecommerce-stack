module.exports=(sequelize,type)=>{
return sequelize.define('products',{
    id: { 
        type :type.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:type.STRING,
        allowNull: false 
    },
    price:{
        type:type.DECIMAL,
        allowNull: false 
    },
    rating:{
        type:type.INTEGER,
        default:0
    },
    images:{
        type:type.STRING,
        allowNull:false
    },
    url:{
        type:type.STRING,
    },
    stock :{
        type:type.STRING,
        allowNull:false
    },
    Description :{
        type:type.STRING,
        allowNull:false
    },
     reviewId:{
        type:type.INTEGER
    },
    userId:{
        type:type.INTEGER
    },
    subCategoryId:{
        type:type.INTEGER
    },
    flashsale:{
        type:type.BOOLEAN,
        defaultValue:false
    },
    systemProduct:{
        type:type.BOOLEAN,
        defaultValue:false
    },
    DiscountId:{
        type:type.INTEGER
    }
});
}