import React from 'react';
import styles from './ReviewCard.module.css'
import img from '../../../assets/images/img5.jfif'
const ReviewCard = ({ review, index, num }) => {
    const { name, desc } = review || {}
    return (
        <div>
            <div>
                <div>
                    <div className='flex justify-center items-center '>
                        <div
                            className={`gap-5 ${index === num ? styles.reviewCard : styles.review} relative py-5 pl-2 shadow-xl mb-20`}
                        >

                            <img className='h-[170px] mx-auto w-[170px] rounded-full object-cover ' src={img} alt="Shoes" />

                            <div class="card-body sm:p-2 p-1 items-center text-center">
                                <p className='font-bold lg:text-[25px] sm:text-[20px] text-[18px]'>{name}</p>
                                <div class="card-actions text-[14px] md:text-[13px]">
                                    <p>
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;