import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAccessToken, putAccessToken } from '../utils/api';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}   

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(getAccessToken());

    const updateToken = (newToken) => {
        putAccessToken(newToken)
        setToken(newToken);
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setToken(localStorage.getItem('accessToken'));
        };

        addEventListener('storage', handleStorageChange);

        return () => removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken: updateToken }}>
            {children}
        </AuthContext.Provider>
    );
};