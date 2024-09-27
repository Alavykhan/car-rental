import React from 'react';
import offerCar from '../../assets/imgs/offeer-car.png'
const Offer = () => {
    return (
        <div className='mt-20 bg-red-700 flex justify-between items-center text-white px-16'>
            <div>
                <h2 className='text-6xl font-title font-semibold'>Best Offer</h2>
                <p className='text-2xl mt-3 font-medium'>Bentley Flying Spur</p>
                <p className='text-2xl font-medium'>for $400/<span className='font-normal'>day</span></p>
                <button className='bg-white py-2 px-5 text-red-700 rounded-lg text-lg mt-3 font-medium'>Book Now</button>
            </div>
            <div>
            <img src={offerCar} alt="" />
            </div>
        </div>
    );
};

export default Offer;