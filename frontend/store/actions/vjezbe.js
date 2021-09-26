export const PROMJENA_FAVORITA='PROMJENA_FAVORITA'
export const POSTAVI_FILTERE='POSTAVI_FILTERE'
export const DOHVATI_VJEZBE = 'DOHVATI_VJEZBE';
import axios from 'axios'

export const promjenaFavorita = (nova,token) => {
    return {
        type: PROMJENA_FAVORITA,
        likeVjezba:nova,
        token:token
    }
}

//radim akciju za mijenjanje niza filtera
export const postaviFiltere = (vrijednostiFiltera) => {
    return {
        type: POSTAVI_FILTERE,
        filteri: vrijednostiFiltera
    }
}
export const dohvatiVjezbe = () => async dispatch => {
    const res = await axios.get(`http://192.168.43.250:3001/api/vjezbe`)
         dispatch( {
            type: DOHVATI_VJEZBE,
             payload: res.data
         })
        }

