import axios from 'axios'
const osnovniUrl = 'http://192.168.43.250:3001/api/register'

const registracija = async podaci => {
    const odgovor= await axios.post(osnovniUrl, podaci);
    return odgovor.data
}

export default {
    registracija
}