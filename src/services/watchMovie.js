import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';

export default (id) => {
    
    return axios({
        url:constantes.local+'graphql',
        method:'post',
        data:{
            query:`
                query{
                    singleMovies(id:"${id}"){
                        _id,
                        name,
                        url,
                        image
                                        }
                }

            `
        }, headers:{'Authorization':'JWT ' + getToken()}
    })
}