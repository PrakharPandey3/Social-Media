import React, { useContext } from 'react'
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { axiosInstance } from '../axiosCalls/axios';

const AuthContext = createContext();

//Public Pages - PublicRoutes
//Protected Pages - ProtectedRoutes

export const AuthProvider = ({children})=>{   
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        axiosInstance.get('users/me').then((res)=>{
            console.log(res.data.userData);
            setUser(res.data.userData); 
            setLoading(false);
        }).catch((err)=>{
            console.log(err);
            setLoading(false);
        }).finally(()=>{
            setLoading(false);
        });
    }, []);

    return(
        <AuthContext.Provider value={{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext);