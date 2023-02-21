import React, { useState, createContext } from 'react'
import { IValueContext } from '../models/context'
import { IuserDetails } from '../models/login'

export const AuthContext = createContext<IValueContext>({
    user: undefined,
})

export const AuthProvider = ({ children }: any) => {

    const [auth, setAuth] = useState<IuserDetails | undefined>(undefined)

    const login = (userData: IuserDetails) => {
        setAuth(userData)
    }

    const logout = () => { 
        setAuth(undefined)
    }

    const valueContext: IValueContext = {
        user: auth,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}