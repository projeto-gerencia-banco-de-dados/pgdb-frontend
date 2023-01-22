import Axios from 'axios';
import { apiUrl } from './api';

export const findAllCandidates = async () => {
    try {
        const response = await Axios.get(`${apiUrl}/candidato/all`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const findAllCandidatesByCargo = async (cargo) => {
    try {
        const response = await Axios.get(`${apiUrl}/candidato/by-cargo/${cargo}`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const findAllCandidatesByUf = async (uf) => {
    try {
        const response = await Axios.get(`${apiUrl}/candidato/by-uf/${uf}`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};