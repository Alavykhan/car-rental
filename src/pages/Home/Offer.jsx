import React from 'react';
import offerCar from '../../assets/imgs/offeer-car.png'
import { Link } from 'react-router-dom';
const Offer = () => {
    return (
        <div className='mt-20 bg-red-700 flex justify-between items-center text-white md:px-16 px-8'>
            <div className='w-full py-3'>
                <h2 className='md:text-6xl text-2xl font-title font-semibold'>Best Offer</h2>
                <p className='md:text-2xl md:mt-3 font-medium'>Bentley Flying Spur</p>
                <p className='md:text-2xl font-medium'>for $400/<span className='font-normal'>day</span></p>
                <Link to='http://localhost:5173/singlecar/66fd31820792cfa42ff7adb6'><button className='bg-white py-2 px-5 text-red-700 rounded-lg md:text-lg mt-3 md:font-medium'>Book Now</button></Link>
            </div>
            <div className='w-full'>
            <img src={offerCar} alt="" />
            </div>
        </div>
    );
};

export default Offer;