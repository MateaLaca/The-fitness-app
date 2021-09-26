//sve konf varijable ukljucujem ode

require('dotenv').config() //ucitavanje environment varijabli prilikom pokretanja da bi bile dostupne u objektu process.env u aplikaciji

const PORT=process.env.PORT || 3001

//Baza podataka
const password=process.env.ATLAS_PASS
const dbname=process.env.NODE_ENV === 'test'
?'vjezbe-api-test'
:'vjezbe-baza'
const DB_URI=`mongodb+srv://matealaca:${password}@cluster0.t03x3.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports={PORT,DB_URI} 