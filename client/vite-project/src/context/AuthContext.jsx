import React, { useContext } from 'react'
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { axiosInstance } from '../axiosCalls/axios';

const AuthContext = createContext();

//Public Pages - PublicRoutes
//Protected Pages - ProtectedRoutes

export const AuthProvider = ({children})=>{   
    const [user, setUser] = useState(null);

    useEffect(()=>{
        axiosInstance.get('users/me').then((res)=>{
            console.log(res);
            setUser(res.data.userData); 
        }).catch((err)=>{
            console.log(err);
        });
    }, []);

    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext);