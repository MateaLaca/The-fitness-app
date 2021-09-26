import {DOHVATI_VJEZBE, POSTAVI_FILTERE, PROMJENA_FAVORITA} from '../actions/vjezbe';
import vjezbeServer from '../../src/services/vjezbe'

const pocetnoStanje = {
    vjezbe: [], 
    filtriraneVjezbe: [], 
    favoritiVjezbe: [], 
}

const vjezbaReducer= (state=pocetnoStanje,action) => {
    switch (action.type) {
        case DOHVATI_VJEZBE:
            return {
                ...state,
                vjezbe:action.payload,
                filtriraneVjezbe:action.payload
            }
        case PROMJENA_FAVORITA:
            const vjezba=action.likeVjezba
        const oznacen= state.favoritiVjezbe.findIndex(
            vj=> vj.id === vj.idVjezbe
        )
        if (oznacen >= 0){
            //u favoritima je: moram ga izbaciti
            //proc kroz niz, izbacit ovaj id i ostalo vratit
            const noviFavoriti= [...state.favoritiVjezbe]
            noviFavoriti.splice( oznacen, 1)
            return { ...state, favoritiVjezbe: noviFavoriti}
        } else {
            //nije favorit- dodati u favorite
            //dodajen objekt pa se mora ovako
            const token=action.token
            const  Novavjezba= state.vjezbe.find(v=> v.id ===vjezba.idVjezbe)
            const naziv=vjezba.naziv
            const kategorija=vjezba.kategorija
            const beginner= vjezba.beginner
            const intermediate=vjezba.intermediate
            const expert=vjezba.expert
            const oprema=vjezba.oprema
            const videoId=vjezba.videoId
            vjezbeServer.stvori({
                naziv,kategorija,beginner,intermediate,expert,oprema,videoId
                },token );
            return { ...state, favoritiVjezbe: state.favoritiVjezbe.concat(Novavjezba)}
        }
        case POSTAVI_FILTERE: 
        //vrati novo stanje
        const filteri= action.filteri
        const noveFilterVjezbe = state.vjezbe.filter(vj => {
            if(filteri.beginner && !vj.beginner){
                return false
            }
            if(filteri.intermediate && !vj.intermediate){
                return false
            }
            if(filteri.expert && !vj.expert){
                return false
            }
            if(filteri.oprema && !vj.oprema){
                return false
            }
            return true;
        })
        return {...state, filtriraneVjezbe: noveFilterVjezbe}
        
        default:
            return state;
    }
};

export default vjezbaReducer;