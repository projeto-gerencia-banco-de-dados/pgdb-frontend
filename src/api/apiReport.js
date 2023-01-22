import Axios from 'axios';
import { apiUrl } from './api';

export const createReport = async (data, auth, votos) => {
    try {
        const response = await Axios.post(`${apiUrl}/boletim/save`, {
            zona: data.zona,
            secao: data.secao,
            aptos: data.aptos,
            faltosos: data.faltosos,
            usuario: {
                id: auth.data.id
            },
            votos: votos
        });
        
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};