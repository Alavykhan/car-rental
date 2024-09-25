import React from 'react';
import cover from '../../assets/imgs/cover.jpg'
import banner from '../../assets/imgs/banner-2.jpg'
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img src={cover} alt="banner" />
                <div className='absolute top-0 bg-gradient-to-r from-[#151516] to-[rgba(0, 0, 0, 0)] h-full flex justify-between'>
               <div className='mt-32'>
               <h1 className='text-8xl font-title text-white font-semibold w-2/3 pl-16'>Luxury car rental in Dhaka</h1>
               <button className="btn bg-red-800 ml-16 text-white mt-5">Rent Now</button>
               </div>
               <div>
                    <div className='mt-32 relative ml-[420px] w-2/4'>
                    <div>
                    <img className='rounded-lg' src={banner} alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='absolute top-5 left-4'>
                        <p className='text-black text-xl font-semibold font-title'>$160/Day</p>
                        </div>
                        <div className='absolute top-5 right-4'>
                        <button className="btn btn-circle">
                        <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    </div>
               </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Banner;