import axios from "axios"

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const pokeapi = () => {
    //Servicio para consumir la API de Pokemon

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const getAll = async () => {
        const response = await axios.get(baseUrl);
        return response;
    } 

    return {
        getAll
    }
}