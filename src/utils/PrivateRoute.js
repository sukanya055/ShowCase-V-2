import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import auth from '../firebase.init';

const PrivateRoute = ({ children }) => {

    const [loading, setLoading] = useState(true)
    let token = localStorage.getItem("token");
    token && token.replace(/['"]+/g, "");

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/user/validation', {
                    headers: {
                        'Authorization': localStorage.getItem('token').replace(/['"]+/g, ""),
                    }
                })
                console.log('from private Route', data)
                if (data.status === 200) {
                    setLoading(false)

                }
                setLoading(false)
            } catch (error) {
                signOut(auth)
                localStorage.removeItem('token')
            }
        })()
    }, [token])
    if (loading) return <div className='text-center my-40'>Loading...</div>

    return token ? children : <Navigate to={'/auth'} />

};

export default PrivateRoute;

