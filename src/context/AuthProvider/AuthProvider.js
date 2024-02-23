import React, { createContext } from 'react';
import useFunctions from '../../hooks/useFunctions';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContexts = useFunctions();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;