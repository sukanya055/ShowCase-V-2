import React from 'react';
import Layout from '../Layout';
import logo from '../../assets/logo1.jpg'
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
const Payment = () => {
    return (
        <>
            <Layout>
                <div>
                    <div className="hero min-h-screen bg-base-100 w-[90%] mx-auto">
                        <div className="hero-content w-full flex-col lg:flex-row items-start">
                            <div className="text-center lg:text-left w-[50%]">
                                <div className='flex gap-10 items-center'>
                                    <div className='shadow-xl p-2 rounded-md'>
                                        <img className='w-[40px] h-[40px]' src={logo} alt="logo" />
                                    </div>
                                    <p className='text-xl text-[#0d2366] font-bold'>Qurinomsolutions</p>
                                </div>
                                <div>
                                    <div className='mt-10'>
                                        <h4 className='text-[#0d2366] text-[27px] font-[600]'>Subscription</h4>
                                        <div className='w-[40px] h-[4px] bg-[#ffa500] mt-4'></div>
                                        <p className='mt-10 text-[#0d2366] text-xl font-[600]'>Choose Any One Plan</p>
                                    </div>
                                </div>
                                <div className='mt-32'>
                                    <p className='text-[#0d2366] font-[600] text-[17px]'>Contact Us:</p>
                                    <div className='mt-7'>
                                        <div className='flex items-center gap-2'>
                                            <span><IoMdMail
                                            className='text-[19px]'
                                            /></span>
                                            <a
                                                className="link link-hover"
                                                href="mailto: consulting@qurinomsolutions.com text-[#0B1514] text-[14px]"
                                            >
                                                consulting@qurinomsolutions.com
                                            </a>
                                        </div>
                                        <div className='flex items-center gap-2 mt-5'>
                                            <span><FaPhoneAlt
                                            className='text-[19px]'
                                            /></span>
                                            <a
                                                className="link link-hover"
                                                href="mailto: consulting@qurinomsolutions.com text-[#0B1514] text-[14px]"
                                            >
                                               +918668567433
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-12 pr-20'>
                                    <strong className='text-[#0d2366]'>Terms & Conditions:</strong>
                                    <p className='text-[#515978] text-[14px] leading-6 mt-3'>You agree to share information entered on this page with Qurinomsolutions (owner of this page) and Razorpay, adhering to applicable laws.</p>
                                </div>
                            </div>
                            <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[50%]">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Payment;