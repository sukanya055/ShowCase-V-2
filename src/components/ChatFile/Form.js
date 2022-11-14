import React, { useEffect, useState } from 'react';
import { BiSupport } from 'react-icons/bi';
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [user] = useAuthState(auth)
    const [ErrorMessage, setErrorMessage] = useState('')
    const [userData, setUserData] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    const { email, name } = userData || {}


    useEffect(() => {
        if (ErrorMessage) {
            toast.error(ErrorMessage, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }, [ErrorMessage]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        setLoading(true)
        if (user || token) {
            (async () => {
                try {
                    const { data } = await axios.get('http://localhost:5000/user/getUser', {
                        headers: {
                            'Authorization': localStorage.getItem('token')?.replace(/['"]+/g, "")
                        }
                    })

                    setUserData(data)
                } catch (error) {
                    console.log(error)
                    if (error?.response?.status === 400 || error?.response?.status === 401 || error?.response?.status === 500) {
                        setErrorMessage(error?.response?.data?.msg)
                    }
                }
            })()
        }
        setLoading(false)
    }, [user, ErrorMessage])



    function getOrCreateUser(callback) {
        axios.put(
            'https://api.chatengine.io/users/',
            {
                "username": email,
                "email": email,
                "secret": email
            },
            {
                headers: {
                    "Private-Key": process.env.REACT_APP_PRIVATE_KEY
                }
            }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create user error', e))
    }

    function getOrCreateChat(callback) {
        axios.put(
            'https://api.chatengine.io/chats/',
            {
                "usernames": ["ShowCase", email],
                "is_direct_chat": true
            },
            {
                headers: {
                    "Private-Key": process.env.REACT_APP_PRIVATE_KEY,

                }
            }
        )
            .then(r => callback(r.data))
            .catch(e => console.log('Get or create chat error', e))
    }



    useEffect(() => {
        if (userData) {
            getOrCreateUser(
                user => {
                  
                    props.setUser && props.setUser(user)
                    getOrCreateChat(chat => {
                        // setLoading(false)
                      
                        props.setChat && props.setChat(chat)
                    })
                }
            )
        }
    }, [userData,])


    return (
        <div
            style={{
                opacity: props.visible ? '1' : '0',
                width: props.visible ? '400px' : '0px',
                height: props.visible ? '500px' : '0px',
            }}
            className={
                `fixed bottom-[150px] right-[20px] w-[${props.visible ? '400px' : '0px'}] h-[${props.visible ? '500px' : '0px'}] bg-white rounded-xl form shadow-xl `
            }>
            <div className='text-black '>
                <div className='text-center'>
                    <div className='text-center flex justify-center mt-5'>
                        <BiSupport
                            className='text-6xl text-black font-bold text-center'
                        />
                    </div>
                    <p className='text-xl leading-9'>ChatBot</p>
                </div>
                {
                    loading ? <div className='absolute top-0 left-0 w-full h-full'>

                        <p className='text-center my-20 '>Loading....</p>
                    </div> : <div>
                        {
                            !userData && <div className='mt-5'>
                                <div>
                                    <p className='text-center mt-20 text-3xl font-bold'>Please login </p>
                                </div>
                                <div className='flex justify-center gap-7 mt-10'>
                                    <button onClick={() => navigate('/auth')} className='bg-[#3371F2] text-white px-5 py-2 rounded-md'>Login</button>
                                    <button onClick={() => navigate('/joinUs')} className='bg-[#3371F2] text-white px-5 py-2 rounded-md'>Sign Up</button>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;