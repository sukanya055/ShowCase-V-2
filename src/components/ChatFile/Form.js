import React from 'react';
import { BiSupport } from 'react-icons/bi';
const Form = () => {
    return (
        <div>
            <div className='text-black '>
                <div className='text-center'> 
                    <div className='text-center flex justify-center mt-5'>
                        <BiSupport
                        className='text-6xl text-black font-bold text-center'
                        />
                    </div>
                    <p className='text-xl leading-9'>ChatBot</p>
                </div>
            </div>
        </div>
    );
};

export default Form;