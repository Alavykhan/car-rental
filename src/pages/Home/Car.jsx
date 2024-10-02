import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({car}) => {
    const {_id, title, img, price}= car;
    return (
        <Link to={`/singlecar/${_id}`}>
            <div className='w-[500px] h-[350px] bg-stone-100 rounded-xl text-black'> 
            <h2 className='font-semibold font-title text-xl pl-7 pt-5'>{title}</h2>
            <p className='font-medium text-lg pl-7'>${price}<span className='text-base text-stone-500'>/day</span></p>
            <div className='flex justify-center items-center'>
            <img src={img} className='w-11/12' alt="" />
            </div>
        </div>
        </Link>
    );
};

export default Car;