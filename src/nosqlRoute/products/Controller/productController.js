function getAllProducts(req,res,next){
    console.log('hello')
    res.status(200).json({message:'Route is working fine'});
}
module.exports={
    getAllProducts
}
