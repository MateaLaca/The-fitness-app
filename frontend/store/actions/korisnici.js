export const TRENUTNI_KORISNIK = 'TRENUTNI_KORISNIK'
export const PROMJENI_OMILJENE = 'PROMJENI_OMILJENE'
export const DOHVATI_KORISNIKE = 'DOHVATI_KORISNIKE'
import axios from 'axios'
//(ime,tok)

export const spremiKorisnika = (username, token) => {
    return {
        type: TRENUTNI_KORISNIK,
        username: username,
        token: token
    }
}

export const PromjeniOmiljene = (id, idVjezbe, naziv, videoid, lajkani, korisnik) => {
    return {
        type: PROMJENI_OMILJENE,
        id: id,
        idVjezbe: idVjezbe,
        naziv: naziv,
        videoid: videoid,
        lajkani: lajkani,
        korisnik: korisnik
    }
}

export const DohvatiKorisnike = () => async dispatch => {
    const res = await axios.get(`http://192.168.43.250:3001/api/korisnici`)
    dispatch({
        type: DOHVATI_KORISNIKE,
        payload: res.data
    })
}