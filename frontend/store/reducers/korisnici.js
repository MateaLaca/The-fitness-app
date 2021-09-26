import {DOHVATI_KORISNIKE,TRENUTNI_KORISNIK, PROMJENI_OMILJENE} from "../actions/korisnici"
import korisniciServer from '../../src/services/korisnici';

const pocetnoStanje= {
    username:"",
    token:"",
    vjezbe: [],
    korisnici: []
}

const korisnikReducer= (state=pocetnoStanje,action) => {
    switch(action.type) {
        case DOHVATI_KORISNIKE:
            return {
                ...state,
                korisnici:action.payload
            }
        case TRENUTNI_KORISNIK:
            return {
                ...state,
                username: action.username,
                token:`bearer ${action.token}`
            }
        case PROMJENI_OMILJENE:
            const id=action.id
            const idVjezbe= action.idVjezbe
            const lajkani= action.lajkani;
            const korisnik=action.korisnik;
            const naziv=action.naziv;
            const videoid=action.videoid;

            console.log(idVjezbe)
            let vjezbe= JSON.parse(JSON.stringify(lajkani))
            const indexOdVjezbe=vjezbe.findIndex((videoo) => videoo.id.toString() == idVjezbe.toString());
            console.log(indexOdVjezbe);
            console.log(JSON.stringify(vjezbe));
            
            if(indexOdVjezbe >= 0) {
                console.log("Micem");
                vjezbe.splice(indexOdVjezbe,1);
            } else {
                console.log("Dodajem");
                vjezbe.push({id:idVjezbe, naziv:naziv, videoId:videoid });
            }
            console.log(JSON.stringify(vjezbe));
            const noviKorisnik = {
                ...korisnik[0],
                vjezbe
            }
            console.log(JSON.stringify(noviKorisnik));
            korisniciServer.osvjezi(id, [noviKorisnik]).then((res) => {
                console.log(JSON.stringify(res.data));
                return {
                    ...state,
                    korisnici: [res.data]
                }
            }, (err) => {
                console.error(err);
            });
        default:    
         return state;
    }
};
export default korisnikReducer;