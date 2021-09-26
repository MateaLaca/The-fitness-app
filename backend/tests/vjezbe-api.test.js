//ukljuci podatke za testiranje
const { TestScheduler } = require('@jest/core')
const mongoose= require('mongoose') //radit cu s bazom
const supertest= require('supertest') //biblioteka
const Vjezba= require('../models/vjezba')
const pomocni= require('./pomocni')
const app= require('../app') //ukljuci aplikaciju zbog ruta, testiran logiku
const api= supertest(app) //napravit testni api pomocu supertesta i saljen app kao parametar


beforeEach( async () => {
    await Vjezba.deleteMany({})
    let objektVjezba = new Vjezba(pomocni.pocetneVjezbe[0])
    await objektVjezba.save()
    objektVjezba = new Vjezba(pomocni.pocetneVjezbe[1])
    await objektVjezba.save()
    objektVjezba = new Vjezba(pomocni.pocetneVjezbe[2])
    await objektVjezba.save()
  })

//idem vidit jel se podaci vracaju u json obliku

test('Vjezbe se vracaju kao JSON', async ()=> { //fja koju koristin za testiranje
    await api.get('/api/vjezbe') //saljen get zahtjev na ovu rutu
    .expect(200)
    .expect('Content-Type', /application\/json/) //2.reg izraz

})
//await ceka dok se ne izvrsi odgovor
test('Baza ima tocno 32 vjezbe', async ()=> {
    const odgovor= await api.get('/api/vjezbe')
    
    expect(odgovor.body).toHaveLength(3)
})
test("Provjera naziva neke vjezbe", async () => {
    const odgovor= await api.get('/api/vjezbe')
    const naziv= odgovor.body.map(p=> p.naziv)
    expect(naziv).toContain('18Min Beginner Chest Workout | No Equipment Home Workout for Starters')
})

afterAll(()=> {
    mongoose.connection.close() //kad zavrse testovi zatvori kon
})