const bcrypt = require('bcrypt')
const Korisnik = require('../models/korisnik')
const pomocni = require('./pomocni')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app) //simulirani api

describe('Samo jedan korisnik u bazi',()=>{
beforeEach(async () => {
    await Korisnik.deleteMany({}) //izbrisat bazu

    const passHash=await bcrypt.hash('tajna',10) //napravit novi hash od ove sifre
    const korisnik= new Korisnik({ //novi korisnik
        username: 'admin',
        passHash
    })
    await korisnik.save() //Spremi ga u bazu
})
test ('stvaranje novog korisnika', async () => {
    const novi= {
        username: 'hana',
        pass: 'happy'
    }
    const pocetniKor= await pomocni.korisniciIzBaze()

    await api.post('/api/korisnici')
    .send(novi)
    .expect(200)
    .expect('Content-Type', /application\/json/) //2.reg izraz

    const krajKorisnici= await pomocni.korisniciIzBaze()
    expect(krajKorisnici).toHaveLength(pocetniKor.length + 1)

    const svaImena=krajKorisnici.map(k=> k.username)
    expect(svaImena).toContain(novi.username)
})


afterAll( async ()=> {
    await mongoose.connection.close()
})
})




















/*test('Ispravno vraca gresku ako postoji username', async () => {
    const novi= {
        username: 'admin',
        pass: 'matea13'
    }
    const pocetniKor= await pomocni.korisniciIzBaze()

    const rez= await api.post('/api/korisnici')
    .send(novi)
    .expect(400)
    .expect('Content-Type', /application\/json/) 
    //2.reg izraz
    //ovo sta vrati mora imati tekst pogreske
    expect(rez.body.error).toContain('`username` to be unique')
    const krajKorisnici= await pomocni.korisniciIzBaze() //iz baze dohvacam
    expect(krajKorisnici).toHaveLength(pocetniKor.length)
})*/