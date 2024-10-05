import React from 'react';
import cover from '../../assets/imgs/cover.jpg'
import banner from '../../assets/imgs/banner-2.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaCarSide } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <img src={cover} alt="banner" />
                <div className='absolute top-0 bg-gradient-to-r from-[#151516] to-[rgba(0, 0, 0, 0)] h-full'>
               <div className='flex justify-between'>
               <div className='md:mt-32 w-full mt-2'>
               <h1 className='md:text-8xl font-title text-white font-semibold pl-8 md:pl-16'>Luxury car rental in Dhaka</h1>
               <Link to='http://localhost:5173/cars'><button className="btn bg-red-700 ml-8 md:ml-16 text-white text-sm md:mt-5">Rent Now</button></Link>
               </div>
               <div>
                <Link to='http://localhost:5173/singlecar/66fd31820792cfa42ff7adbc' >
                    <div className='md:mt-32 relative md:ml-80 ml-36 w-2/4'>
                    <div>
                    <img className='rounded-lg' src={banner} alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='absolute md:top-5 md:left-4 top-1 left-2'>
                        <p className='text-black md:text-xl text-sm font-semibold font-title'>$500/Day</p>
                        </div>
                        <div className='absolute hidden md:visible top-5 right-4'>
                        <button className="btn btn-circle">
                        <FaArrowRight className='text-sm' />
                            </button>
                        </div>
                    </div>
                    </div>
                    </Link>
               </div>
               </div>
                </div>
                <div className='bg-white rounded-xl px-5 absolute md:left-20 left-5 bottom-2 md:bottom-16 flex justify-between items-center w-11/12 md:py-5 text-black md:text-lg text-xs md:font-semibold'>
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
                <Link to='http://localhost:5173/cars'>
                <div className='bg-red-700 rounded-lg md:px-10 px-3 md:py-4 py-2 my-1 text-white flex flex-col items-center'>
                <SlCalender className='md:text-4xl' /> 
                 <button>Book Now</button>
                </div>
                </Link>
            </div>
            </div>
        
            
        </div>
    );
};

export default Banner;