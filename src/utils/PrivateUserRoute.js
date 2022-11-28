import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useCookies } from 'react-cookie';

const PrivateUserRoute = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate=useNavigate()
    const [loading, setLoading] = useState(true)
    let token = localStorage.getItem("token");
    token && token.replace(/['"]+/g, "");

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://api.showcaseurbusiness.com/user/validation', {
                    headers: {
                        'Authorization': cookies?.token,
                    }
                })
               
                if (data.status === 200) {
                    setLoading(false)

                }
                setLoading(false)
            } catch (error) {
                
                if (error?.response.status === 400) {
                    removeCookie('token', {
                        path: '/',
                        maxAge: 7 * 24 * 60 * 60 * 1000,// 7d,
                    })
                    signOut(auth)
                    navigate('/auth')
                }

            }
        })()
    }, [token, cookies, removeCookie,navigate])
    if (loading) return <div className='text-center my-40'>Loading...</div>

    return token ? children : <Navigate to={'/auth'} />

};

export default PrivateUserRoute;

