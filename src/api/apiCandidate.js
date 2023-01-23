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

export const findCandidateById = async (id) => {
    try {
        const response = await Axios.get(`${apiUrl}/candidato/${id}`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const createCandidate = async (name, role, uf, partido, num) => {
    try {
        const response = await Axios.post(`${apiUrl}/candidato/cadastrar`, {
            nome: name,
            cargo: role,
            siglaUf: uf,
            partido: {
                id: partido.id
            },
            numCand: +num
        });
        
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};