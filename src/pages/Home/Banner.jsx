import React from 'react';
import cover from '../../assets/imgs/cover.jpg'
import banner from '../../assets/imgs/banner-2.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaCarSide } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img src={cover} alt="banner" />
                <div className='absolute top-0 bg-gradient-to-r from-[#151516] to-[rgba(0, 0, 0, 0)] h-full flex justify-between'>
               <div className='mt-32'>
               <h1 className='md:text-8xl font-title text-white font-semibold w-2/3 pl-16'>Luxury car rental in Dhaka</h1>
               <button className="btn bg-red-700 ml-16 text-white mt-5">Rent Now</button>
               </div>
               <div>
                    <div className='mt-32 relative ml-[420px] w-2/4'>
                    <div>
                    <img className='rounded-lg' src={banner} alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='absolute top-5 left-4'>
                        <p className='text-black text-xl font-semibold font-title'>$1600/Day</p>
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
                <div className='bg-white rounded-xl px-5 absolute left-20 bottom-16 flex justify-between items-center w-11/12 py-5 text-black text-lg font-semibold'>
                <div className='flex items-center gap-2'>
                <FaCarSide className='text-red-700' />
                <p>On Time Pick Up</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className='flex items-center gap-2'>
                <p>On Time Drop Out</p>
                <FaCarSide className='text-red-700' />
                </div>
                <div className="divider divider-horizontal"></div>
                <div className='flex items-center gap-2'>
                <p>Best Rental Service</p>
                <IoCarSport className='text-red-700' />
                </div>
                <div className="divider divider-horizontal"></div>
                <div className='bg-red-700 rounded-lg px-10 py-4 text-white flex flex-col items-center'>
                <SlCalender className='text-4xl' /> 
                <button>Book Now</button>
                </div>
            </div>
            </div>
        
            
        </div>
    );
};

export default Banner;