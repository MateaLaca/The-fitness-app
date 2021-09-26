const mongoose = require('mongoose');
 const uniqueValidator = require('mongoose-unique-validator')

const korisnikSchema=new mongoose.Schema({  //definiram objekt, struktura dokumenta kojeg spremam u db
  username:
   {
    type:String,
    unique:true,
    minlength:3, 
   
    },  
  passHash: 
   { //hash vrijednosti lozinki
    type:String,
     minlength:4, 
   
  },
  vjezbe:[ 
    { //moram def tip objekta koji ce se spremat u niz
    type:mongoose.Schema.Types.ObjectId, //niz id-evi ugradeni objectid moongose sheme
    ref:'Vjezba' //ime modela,bitno za mongoose
  }]
})
//moram rec da koristi to
korisnikSchema.plugin(uniqueValidator)

korisnikSchema.set('toJSON',{  
  transform:(doc,ret)=>{
    ret.id=ret._id.toString()
    delete ret._id
    delete ret.__v
    //lozinka se ne smi prikazat
    delete ret.passHash //ne smin vratit hash passworda ako neko zatrazi sa get korisnika
    return ret
  }
})
//def model
const Korisnik=mongoose.model('Korisnik',korisnikSchema,'korisnici') 

module.exports = Korisnik;