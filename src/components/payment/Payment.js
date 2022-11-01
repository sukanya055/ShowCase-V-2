import React, { useEffect, useRef, useState } from 'react';
import Layout from '../Layout';
import logo from '../../assets/logo1.jpg'
import payment from '../../assets/payment.png'
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { GiBoulderDash } from 'react-icons/gi';
const Payment = () => {

    let silverRef = useRef(null)
    let goldRef = useRef(null)
    let platinumRef = useRef(null)
    const [pay, setPay] = useState(0)
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)

    const handleSilver = (status) => {

        if (status) {
            setCheck1(true)
            setCheck2(false)
            setCheck3(false)
            setPay(prev => (Number(silverRef?.current?.innerText.replace(/[^A-Za-z0-9]/g, ""))))

        } else {
            setPay(0)
        }
    }
    const handleGold = (status) => {

        if (status) {
            setCheck1(false)
            setCheck2(true)
            setCheck3(false)
            setPay(prev =>Number(goldRef?.current?.innerText.replace(/[^A-Za-z0-9]/g, "")))
        } else {
            setPay(0)
        }
    }
    const handlePlatinum = (status) => {

        if (status) {
            setCheck1(false)
            setCheck2(false)
            setCheck3(true)
            setPay(prev => Number(platinumRef?.current?.innerText.replace(/[^A-Za-z0-9]/g, "")))
        } else {
            setPay(0)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
  

    return (
        <>
            <Layout>
                <div>
                    <div className="hero min-h-screen bg-base-100 w-[90%] mx-auto my-20">
                        <div className="hero-content w-full flex-col lg:flex-row items-start justify-center">
                            <div className="lg:text-left w-full md:w-[50%] mx-auto">
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
                                <div className='mt-12 lg:pr-20'>
                                    <strong className='text-[#0d2366]'>Terms & Conditions:</strong>
                                    <p className='text-[#515978] text-[14px] leading-6 mt-3'>You agree to share information entered on this page with Qurinomsolutions (owner of this page) and Razorpay, adhering to applicable laws.</p>
                                </div>
                            </div>
                            <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-full md:w-[70%] lg:w-[40%] mx-auto mt-20 lg:mt-0">
                                <form
                                    onSubmit={handleSubmit}
                                    className='relative'>
                                  
                                    <div className="card-body flex flex-col gap-12 px-4 lg:px-6">
                                    <div>
                                        <h4 className='text-[#0d2366] text-[20px] font-[600]'>Payment Details</h4>
                                        <div className='w-[40px] h-[4px] bg-[#ffa500] mt-4'></div>
                                    </div>
                                        <div className='flex items-center justify-between '>
                                            <label htmlFor="">Email</label>
                                            <input type="text" className="input input-bordered w-[70%]" />
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <label htmlFor="">Phone</label>
                                            <input type="number" className="input input-bordered w-[70%]" />
                                        </div>
                                        <div className='flex items-center justify-between '>
                                            <label className='text-[14px] sm:text-[16px]' htmlFor="">
                                                Silver
                                                <span className='text-[#515978] block text-[13px]'>(Optional)</span>
                                            </label>
                                            <div className='flex items-center w-[70%] justify-between input-bordered input'>
                                                <p><span
                                                    ref={silverRef}
                                                    className='font-bold'>₹400</span>.00</p>
                                                <input
                                                    onChange={e => handleSilver(e.target.checked)}
                                                    type="checkbox"
                                                   checked={check1}
                                                    className="checkbox border-2 border-[#ffa500] checkbox-accent"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between '>
                                            <label className='text-[14px] sm:text-[16px]' htmlFor="">
                                                Gold
                                                <span className='text-[#515978] block text-[13px]'>(Optional)</span>
                                            </label>
                                            <div className='flex items-center w-[70%] justify-between input-bordered input'>
                                                <p><span
                                                    ref={goldRef}
                                                
                                                    className='font-bold'>₹700</span>.00</p>
                                                <input
                                                    onChange={e => handleGold(e.target.checked)}
                                                    type="checkbox"
                                                    checked={check2}
                                                    className="checkbox border-2 border-[#ffa500] checkbox-accent"
                                                />
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between mb-24'>
                                            <label className='text-[14px] sm:text-[16px]' htmlFor="">
                                                Platinum
                                                <span className='text-[#515978] block text-[13px]'>(Optional)</span>
                                            </label>
                                            <div className='flex items-center w-[70%] justify-between input-bordered input'>
                                                <p><span
                                                    ref={platinumRef}
                                                    className='font-bold'>₹1,000</span>.00</p>
                                                <input
                                                    onChange={e => handlePlatinum(e.target.checked)}
                                                    type="checkbox"
                                                    checked={check3}
                                                    className="checkbox border-2 border-[#ffa500] checkbox-accent font-bold"
                                                />
                                            </div>
                                        </div>

                                        <div className='absolute bottom-0 left-0 w-full h-[50px] mt-10 flex items-center'>
                                            <div className='w-[70%] bg-[#f5f6f7] h-full flex items-center px-8'>
                                                <img className='w-full' src={payment} alt="" />
                                            </div>
                                            <div className='bg-[#ffa500] w-[30%] h-full flex justify-center items-center text-white'>
                                                <button type='submit'>Pay ₹ {pay > 0 ? pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '.00'}</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Payment;