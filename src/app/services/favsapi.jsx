import axios from "axios";

export const favsapi = () => {
    //Servicio para gestionar mis favoritos

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Accept'] = 'application/json';

    const baseUrl = 'http://localhost:5000/pokemons'

    const createFav = async (data) => {
        const response = await axios.post(baseUrl, data);
        return response;
    }

    return {
        createFav
    }

}