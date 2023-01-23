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
                id: auth.id
            },
            votos: votos
        });
        console.log();
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const findAllReports = async () => {
    try {
        const response = await Axios.get(`${apiUrl}/boletim/all`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const validateReport = async (id, zona, secao) => {
    try {
        const response = await Axios.post(`${apiUrl}/boletim/validar`, {
            id: id,
            zona: zona,
            secao: secao
        });
        
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};