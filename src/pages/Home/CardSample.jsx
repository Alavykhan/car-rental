import React from 'react';
import photo from '../../assets/imgs/BMW7.png'
const CardSample = () => {
    return (
        <div className='w-[400px] h-[300px] bg-stone-100 rounded-xl'> 
            <h2 className='font-semibold font-title text-xl pl-7 pt-5'>Rolls Royce</h2>
            <p className='font-medium text-lg pl-7'>$400<span className='text-base text-stone-500'>/day</span></p>
            <div className='flex justify-center items-center'>
            <img src={photo} className='w-11/12' alt="" />
            </div>
        </div>
    );
};

export default CardSample;