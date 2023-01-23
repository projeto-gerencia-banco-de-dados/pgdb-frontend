import Axios from 'axios';
import { apiUrl } from './api';

export const findAllParties = async () => {
    try {
        const response = await Axios.get(`${apiUrl}/partido/all`);
        return response;
    } catch (err) {
        return {
            error: true,
            message: err,
        };
    }
};