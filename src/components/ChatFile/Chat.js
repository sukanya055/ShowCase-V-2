import React, { useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import Form from './Form';
import './Chat.css'
const Chat = () => {
    const [formOpen, setFormOpen] = useState(false)
    const ref = useRef(null)
    useOutsideAlerter(ref)
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFormOpen(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }




    return (
        <div ref={ref} className='relative'>
            <div>
                <Avatar
                    formOpen={formOpen}
                    setFormOpen={setFormOpen}
                />
            </div>
            {
                formOpen && <div className={`fixed bottom-[150px] right-[20px] w-[400px] h-[500px] bg-white rounded-xl form shadow-xl`}>
                    <Form />
                </div>
            }
        </div>
    );
};

export default Chat;