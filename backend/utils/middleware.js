const logger=require('./logger')

const zahtjevInfo= (req,res,next)=> {
    logger.info("metoda: ",req.method)
    logger.info("putanja",req.path)
    logger.info('Tijelo',req.body)
    logger.info('---')
    next()
}
const nepoznataRuta=(req,res)=> {
    res.status(404).send({ error: 'nepostojeca ruta'})
}
const errorHandler=(err,req,res,next) => {
    console.log("Middleware za pogreske")
    logger.greska(err.message)
    if(err.name==="CastError")
    {return res.status(400).send({error: "Krivi format ID parametra"}) }
    else if (err.name==="MongoParseError")
    {return res.status(400).send({error: "Krivi format podatka"})}
    else if( err.name==="JsonWebTokenError")
    {return res.status(401).json({error: "Neispravni token"})}
    
    next(err)
    
}
module.exports= {zahtjevInfo,nepoznataRuta,errorHandler}