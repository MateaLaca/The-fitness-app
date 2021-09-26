const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')
const loginRouter= require('express').Router()
const Korisnik= require('../models/korisnik')

loginRouter.post('/', async (req,res)=> {
const data= req.body //{username, pass}

const korisnik= await Korisnik.findOne({username: data.username})
const sifraOk= korisnik===null
? false
 : await bcrypt.compare(data.pass, korisnik.passHash)//usporeduje jel dobra sifra

//ako nesto nije oke: reci korisniku
if(!(korisnik && sifraOk)) {
 return res.status(401).json({
     error: 'Neispravna lozinka ili nepostojeci korisnik'
 })   
}
//ako je dobro, radim token_objekt u koji cu spremit podatke
const korisnikToken = {
    username: korisnik.username,
    id: korisnik._id
}
const token=jwt.sign(korisnikToken, process.env.SECRET)

res.status(200).send({
    token, username: korisnik.username})
})

module.exports= loginRouter