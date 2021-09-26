const vjezbeRouter = require('express').Router();
const Vjezba = require('../models/vjezba');

vjezbeRouter.get('/', async (req,res)=> {
    const vjezbe= await Vjezba.find({})
    .populate('korisnik', {username: 1})
    res.json(vjezbe)
})

module.exports = vjezbeRouter;