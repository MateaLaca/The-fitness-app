import axios from 'axios'
const osnovniUrl = 'http://192.168.43.250:3001/api/vjezbe'

// let token = null
// const postaviToken = noviToken => { //prima token i generira autoriz.header
//     token = `bearer ${noviToken}`
// }
 
const dohvatiSve = () => {
    return axios.get(osnovniUrl);
}
const stvori = async (noviObjekt,token) => {
    const config={
        headers: {Authorization: token}
    }
    const odgovor=await axios.post(osnovniUrl,noviObjekt,config)
    return odgovor
}
 
const osvjezi = (id, noviObjekt) => {
    return axios.put(`${osnovniUrl}/${id}`, noviObjekt)
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
