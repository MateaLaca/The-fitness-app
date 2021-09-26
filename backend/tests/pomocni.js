const Korisnik = require('../models/korisnik')
const Vjezba= require('../models/vjezba')

const pocetneVjezbe= [
    {
        id: 1,	
        naziv:'18Min Beginner Chest Workout | No Equipment Home Workout for Starters',
        kategorija: 'CHEST',
        beginner:true,
        intermediate:false,
        expert:false,
        oprema:false,
        videoId:'dxZc2sjvHMo'
        },
        {
        id: 2,
        naziv:'HOME CHEST WORKOUT FOR BEGINNERS | No Equipment | Rowan Row',
          kategorija: 'CHEST',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:false,
          videoId:'qQAs6CKvirg'
        },
        {
              id: 3,
              naziv:'BEGINNER Chest Workout',
          kategorija: 'CHEST',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:true,
          videoId:'GPvGGSgh0Ps'
        },
      {
          id: 4,
          naziv:'Intermediate Chest Workout | Home Training with No Equipment Needed',
          kategorija: 'CHEST',
          beginner:false,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'P21xWl1tj6Y'
      },
      {
          id: 5,
          naziv:'8 Best Chest Exercises YOU Should Be Doing',
          kategorija: 'CHEST',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:true,
          videoId:'UxdTsE1esIQ'
      },
      {
          id: 6,
          naziv:'WORLDS BEST CHEST WORKOUT',
          kategorija: 'CHEST',
          beginner:false,
          intermediate:false,
          expert:true,
          oprema:true,
          videoId:'XwSJy-S6oXI'
      },
      {
          id: 7,
          naziv:'Most Effective CHEST Workout at HOME',
          kategorija: 'CHEST',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'qwx1VV9vV1A'
      },
      {
          id: 8,
          naziv:'BACK WORKOUT FOR STRONGER BACK + BETTER POSTURE',
          kategorija: 'BACK',
          beginner:true,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'o062bxRT1EA'
      },
      {
          id: 9,
          naziv:'BODYWEIGHT BACK and CORE WORKOUT at Home',
          kategorija: 'BACK',
          beginner:true,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'JtT6B8TIA-s'
      },
      {
          id: 10,
          naziv:'Intense BACK WORKOUT (At Home & Apartment Friendly)',
          kategorija: 'BACK',
          beginner:false,
          intermediate:false,
          expert:true,
          oprema:true,
          videoId:'1dJ-d7tVwEk'
      },
      {
          id: 11,
          naziv:'BACK WORKOUT - upper back, lower back, lats & neck',
          kategorija: 'BACK',
          beginner:true,
          intermediate:true,
          expert:false,
          oprema:true,
          videoId:'JAuNs5FnAOU'
      },
      {
          id: 12,
          naziv:'5 MIN PERFECT BACK Workout (AT HOME. NO EQUIPMENT)',
          kategorija: 'BACK',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'SOvsUhLCdys'
      },
      {
          id: 13,
          naziv:'Tone Your Arms Workout - No Equipment (QUICK + INTENSE)',
          kategorija: 'ARMS',
          beginner:true,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'UyTR2EjTAXU'
      },
      {
          id: 14,
          naziv:"10 MIN TONED ARMS WORKOUT",
          kategorija: 'ARMS',
          beginner:true,
          intermediate:true,
          expert:true,
          oprema:true,
          videoId:'l0CwCvJbGZI'
      },
      {
          id: 15,
          naziv:'10 Min Upper Body & Arms Workout',
          kategorija: 'ARMS',
          beginner:true,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'7L-Td_p0bXE'
      },
      {
          id: 16,
          naziv:'COMPLETE ARM WORKOUT | Target your Biceps and Triceps!',
          kategorija: 'ARMS',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:true,
          videoId:'4dCn9VrFlEY'
      },
      {
          id: 17,
          naziv:'The Most Effective ABS Workout (DO IT ANYWHERE)',
          kategorija: 'ABS',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'pRLGc5DIkyM'
      },
      {
          id: 18,
          naziv:'Best Home Ab Workout | 10 Minutes (GUARANTEED!)',
          kategorija: 'ABS',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'zzD80vCLq0Y'
      },
      {
          id: 19,
          naziv:'ABS WORKOUT | Core Strength EXERCISES for SIX PACK',
          kategorija: 'ABS',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:true,
          videoId:'MoIZR4p_Q5w'
      },
      {
          id: 20,
          naziv:'TOP TEN ABS DAY EXERCISES',
          kategorija: 'ABS',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:true,
          videoId:'uGFsXVmh0y8'
      },
      {
          id: 21,
          naziv:'AB DAY EXERCISES at Planet Fitness (VoiceOver) | Beginner Friendly!',
          kategorija: 'ABS',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:true,
          videoId:'_tDHxD96AVM'
      },
      {
          id: 22,
          naziv:'BEGINNER LEG WORKOUT | Using Basic Gym Equipment',
          kategorija: 'LEGS',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:true,
          videoId:'b33VPxFz0wQ'
      },
      {
          id: 23,
          naziv:'15 MIN BEGINNER LEG WORKOUT (Booty, Thighs & Hamstrings / No Equipment)',
          kategorija:'LEGS',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:false,
          videoId:'9l5kjL2JedM'
      },
      {
          id: 24,
          naziv:'Kayla Itsines Intermediate Workout | No Kit Legs + Cardio Session',
          kategorija:'LEGS',
          beginner:false,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'Nn4ITEf22GU'
      },
      {
          id: 25,
          naziv:'FULL GYM LEG DAY WORKOUT! | Build and Define your lower body',
          kategorija: 'LEGS',
          beginner:true,
          intermediate:true,
          expert:true,
          oprema:true,
          videoId:'Wgjp0CWcGwM'
      },
      {
          id: 26,
          naziv:'HIIT Home Workout for beginners',
          kategorija: 'HIIT',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:false,
          videoId:'q20pLhdoEoY'
      },
      {
          id: 27,
          naziv:'20 Minute Fat Burning HIIT Workout | INTERMEDIATE',
          kategorija: 'HIIT',
          beginner:false,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'a-tDFD7U7V4'
      },
      {
          id: 28,
          naziv:'No Equipment 40 MIN Advanced Monster Monday HIIT Workout',
          kategorija: 'HIIT',
          beginner:false,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'H07zm37E4v8'
      },
      {
          id: 29,
          naziv:'Low impact, beginner, fat burning, home cardio workout. ALL standing!',
          kategorija: 'CARDIO',
          beginner:true,
          intermediate:false,
          expert:false,
          oprema:false,
          videoId:'PvEnWsPrL4w'
      },
      {
          id: 30,
          naziv:'Intermediate Cardio workout',
          kategorija: 'CARDIO',
          beginner:false,
          intermediate:true,
          expert:false,
          oprema:false,
          videoId:'wLYeRlyyncY'
      },
      {
          id: 31,
          naziv:'Advanced fat burning HIIT cardio workout - 30 mins',
          kategorija: 'CARDIO',
          beginner:false,
          intermediate:false,
          expert:true,
          oprema:false,
          videoId:'yplP5cLuyf4'
      },
      {
          id: 32,
          naziv:'BURN 500 CALORIES with this 30-Minute Cardio Workout!',
          kategorija: 'CARDIO',
          beginner:true,
          intermediate:true,
          expert:true,
          oprema:false,
          videoId:'LueYlLt1l9M'
      }
]

const vjezbeIzBaze = async () => {
    const vjezbe = await Vjezba.find({})
    return vjezbe.map(v => v.toJSON())
  }
const korisniciIzBaze = async () => {
    const korisnici = await Korisnik.find({})
    return korisnici.map(k => k.toJSON())
}
   
  module.exports = {
    pocetneVjezbe, vjezbeIzBaze, korisniciIzBaze
  }