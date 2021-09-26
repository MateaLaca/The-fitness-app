const config= require('./utils/config')
const express= require('express')
require('express-async-errors')
const app=express()
const cors= require('cors')
const vjezbeRouter = require('./controllers/vjezbe')
const korisniciRouter = require('./controllers/korisnici')
const loginRouter= require('./controllers/login')
const registerRouter= require('./controllers/register')
const middleware=require('./utils/middleware')
const logger=require('./utils/logger')
const mongoose=require('mongoose')

logger.info("Spajam se na", config.DB_URI)
mongoose.connect(config.DB_URI,
    { //postavke konekcije kao defaultne vrijednosti
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false //promise je pa mogu then(ili spojeni il greska)
    }).then(result => {
        logger.info("Spojeni smo na bazu");
    }).catch(error => {
        logger.info("greska pri spajanju",error.message);
    })

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use(middleware.zahtjevInfo)

app.use('/api/vjezbe',vjezbeRouter)
app.use('/api/korisnici',korisniciRouter)
app.use('/api/login',loginRouter) 
app.use('/api/register',registerRouter) 

app.use(middleware.nepoznataRuta)
app.use(middleware.errorHandler)

module.exports=app