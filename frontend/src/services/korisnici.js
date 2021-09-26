import axios from 'axios'
const osnovniUrl = 'http://192.168.43.250:3001/api/korisnici'

const dohvatiSve = () => {
    return axios.get(osnovniUrl);
}

const stvori = noviObjekt => {
    return axios.post(osnovniUrl, noviObjekt)         
}

const osvjezi = (id, noviObjekt) => {
    return axios.patch(`${osnovniUrl}/${id}`, noviObjekt)
}
const brisi=id=>{
    return axios.delete(`${osnovniUrl}/${id}`)
}

export default {
    dohvatiSve,
    stvori,
    osvjezi,
    brisi
}