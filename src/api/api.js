import jwt_decode from 'jwt-decode';
import Axios from 'axios';

export const apiUrl = 'https://app-pgdb.herokuapp.com';

export const login = async (email, password) => {
    try {
        const response = await Axios.post(`${apiUrl}/login`, {
            email: email,
            senha: password
        });
        
        return {
            data: jwt_decode(response.data.token),
        };
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const createUser = async (name, email, password) => {
    try {
        const response = await Axios.post(`${apiUrl}/usuario/cadastrar`, {
            nome: name,
            email: email,
            senha: password,
            admin: false
        });
        
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};

export const findOneUser = async (id) => {
    try {
        const response = await Axios.get(`${apiUrl}/usuario/${id}`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};