import axios from 'axios';
import constante from '../const';

export default (data) => {
    console.log(data);
    return axios.post(constante.local+"login/",data);
}