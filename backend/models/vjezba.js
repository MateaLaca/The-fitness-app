const mongoose=require('mongoose')

const vjezbaSchema=new mongoose.Schema( {
    naziv:{
                type:String
          },
    kategorija:{
                type:String
            },
    beginner:{
                type:Boolean
            },
    intermediate:{
                type:Boolean
            },
    expert:{
                type:Boolean
            },
    oprema:{
                type:Boolean
            },
    videoId:{
                type:String
            },
    korisnik:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Korisnik'
            }
})
//overrideam fju toJSON 1.par:ime fje
//2.par: sta zelim napraviti sa mnom-transformirati
vjezbaSchema.set('toJSON', {
    transform: (doc, ret)=> {
        ret.id = ret._id.toString() //returnu def id i kazen da je jednak ovom izvornom.toString
        delete ret._id 
        delete ret.__v
        return ret
    }
})

module.exports= mongoose.model('Vjezba',vjezbaSchema, 'vjezbe')
        



