import React, { useEffect, useRef, useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { Layout } from '../../components';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import io from "socket.io-client";
import axios from 'axios';
import { useCookies } from 'react-cookie';


const ENDPOINT = 'http://localhost:5000'

const ChatAdmin = () => {

    let socket = useRef()
    const [currentUserId, setCurrentUserId] = useState('')
    const [cookies, removeCookie] = useCookies(["token"]);
    useEffect(() => {
        if (currentUserId) {
            socket.current = io(ENDPOINT);
            socket.current.emit("add-user", currentUserId);
        }
    }, [currentUserId, socket]);


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://api.showcaseurbusiness.com/api/message/get-user-id', {
                    headers: {
                        "Authorization": cookies?.token,
                    },
                })
              
                setCurrentUserId(data?.data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [cookies])

    return (
        <Layout>
            <div className='flex '>
                <div className='w-full md:max-w-[300px]  max-h-[84vh] overflow-y-auto border-r-2 border-gray-400'>
                    <LeftBar />
                </div>
                <div className='bg-gray-200 w-full hidden md:block'>
                    <RightBar
                        currentUserId={currentUserId}
                        socket={socket}
                    />
                </div>
            </div>

        </Layout>
    );
};

export default ChatAdmin;