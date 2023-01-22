import React, { createContext, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    const setAuthData = (data) => {
        setAuth({
            data: data
        });
    };

    const setAuthDataLogged = async (token) => {
        const data = jwt_decode(token);
        setAuth({
            data: data,
        });
    };

    useEffect(() => {
        setAuth({
            data:JSON.parse(window.localStorage.getItem('authData')),
        });
    }, []);
    // //2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false.
    // //This function will be executed every time component is mounted (every time the user refresh the page);

    useEffect(() => {
        window.localStorage.setItem('authData', JSON.stringify(auth.data));
    }, [auth.data]);

    return (
        <authContext.Provider value={{ auth, setAuthData, setAuthDataLogged }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;