const jwt= require('jsonwebtoken')
const registerRouter= require('express').Router() //novi ruter objekt


registerRouter.post('/', async (req,res)=> {
const data= req.body //{username, pass}

//ako je dobro, radim token_objekt u koji cu spremit podatke
const korisnikToken = {
    username: data.username,
    id: data._id
}
const token=jwt.sign(korisnikToken, process.env.SECRET)

res.status(200).send({
    token, username: data.username})
})

module.exports= registerRouter