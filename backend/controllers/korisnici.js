const bcrypt = require('bcrypt')
const korisniciRouter = require('express').Router() //Router je ugraden u expressu
const Korisnik = require('../models/korisnik') //radim sa modelom
 
korisniciRouter.post('/', async (req, res) => {
  const sadrzaj = req.body // {username, pass}
  
  const runde = 10
  //radim hash vrijednost od pass
  const passHash = await bcrypt.hash(sadrzaj.pass, runde) //broj koliko ce puta vrtit fju, potencija 2 na10
 //novi model

  if(!sadrzaj.username){
    return res.status(400).json({
      error:'Username je obavezan!'
    })
  }
  if(!sadrzaj.pass){
    return res.status(400).json({
      error:'Nedostaje lozinka!'
 })
 }
 const korisnik= new Korisnik({
    username:sadrzaj.username,
    passHash
    //kad se tek stvara korisnik on jos nema rezervacija, stvorit ce prazan niz
})
  const noviKorisnik = await korisnik.save()
  res.json(noviKorisnik) //Saljem ki odg
})

korisniciRouter.get('/', async (req,res)=> {
  const svi= await Korisnik.find({})
  .populate('vjezbe', {naziv: 1,videoId: 1})
  res.json(svi)
})

korisniciRouter.get('/:id',async(req,res) => {
  const kor=await Korisnik.findById(req.params.id)
  if(kor){
    res.json(kor)
  }else{
    res.status(404).end()
  }
})

korisniciRouter.patch('/:id',async (req,res) => {
  const id=req.params.id;
  const data=req.body;

  const novii=({vjezbe: data[0].vjezbe.map((vjezba) => vjezba.id)});
  await Korisnik.findByIdAndUpdate(id, novii);
  const korisnik = await Korisnik.findById(id);
  console.log(korisnik);
  
  res.json(korisnik)
})

module.exports = korisniciRouter