import Axios from 'axios';
import { apiUrl } from './api';

export const findVotesByPresident = async () => {
    try {
        const response = await Axios.get(`${apiUrl}/votos/total-presidente`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const findVotesByGov = async (uf) => {
    try {
        const response = await Axios.get(`${apiUrl}/votos/total-estado/${uf}`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};