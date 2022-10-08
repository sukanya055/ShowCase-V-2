import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from '../../assets/logo.png'

const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <div>
            <footer className="footer md:justify-items-center z-[-10px] md:grid-cols-4 p-10  text-base-content overflow-x-hidden border-t-4 border-gray-500 ">
                <div className='text-center md:text-start w-full'>
                    <span

                        className="footer-title text-center mx-auto text-[#0B1514] font-bold text-xl opacity-100">Logo</span>
                    <div className='flex items-center w-full'>
                        <img className='mx-auto w-[130px]' src={logo} alt="logo" />
                    </div>
                </div>
                <div className='w-full text-center md:text-start place-items-center md:place-items-start'>
                    <span className="footer-title text-xl opacity-100 text-[#0B1514]" >Contact</span>
                    <a className="link link-hover" href="mailto: works@creatt.in text-[#0B1514] text-[14px]">Mail Us: works@creatt.in</a>
                    <p className="link link-hover text-[14px]">Call Us: +1800 000 0001</p>

                </div>
                <div className='text-center lg:text-start w-full place-items-center md:place-items-start'>
                    <span className="footer-title text-xl opacity-100">Visit Us</span>
                    <p className="link link-hover text-[14px]">123 Alberta St, San Francisco,</p>
                    <p className="link link-hover text-[14px]">California 94114</p>

                </div>
                <div className='text-center lg:text-start w-full place-items-center md:place-items-start'>
                    <span className="footer-title text-xl opacity-100 text-[#0B1514]">Legal</span>
                    <div >
                        <div className='text-[14px]'>
                            Copyright © {year} Create Wire UI Kit All rights reserved
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;