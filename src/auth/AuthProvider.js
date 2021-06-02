import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const contextValue = {
        user,
        login(queryUser) {
            setUser(queryUser)
        },
        logout() {
            setUser(null)
        },
        isLogged() {
            return !!user
        }
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;