import React, { createContext, useState } from 'react';
import jwt_decode from "jwt-decode";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const setAuthData = (data) => {
        console.log(data);
        setAuth(data);
    };

    const setAuthDataLogged = async (token) => {
        const data = jwt_decode(token);
        setAuth({
            data: data,
        });
    };

    return (
        <authContext.Provider value={{ auth, setAuthData, setAuthDataLogged }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;