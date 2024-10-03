import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
const SingleCar = () => {
    const cars= useLoaderData();
    const {_id, title, rating, model, price, description, condition, img}= cars
    return (
        <div className='bg-black h-screen flex justify-center items-center gap-8'>
            <div className='bg-stone-100 w-[800px] h-[500px] rounded-xl flex justify-center items-center'>
                <img src={img} alt="" />
            </div>
            <div className='text-white space-y-3 w-1/2'>
                <h2 className='text-4xl text-red-600 font-semibold'>Name: {title}</h2>
                <p className='text-xl'>Model: {model}</p>
                <p className='text-xl'>Condition: {condition}</p>
                <p className='text-xl'>Price: ${price}/day</p>
                <ReactStars
                    count={5}
                    onChange={rating}
                    size={24}
                    color="#ffd32c"
                />
                <p className='text-xl'>Description: {description}</p>
                <Link to={`/bookings/${_id}`} className="btn bg-red-700 text-white">Book Now!</Link>
            </div>
        </div>
    );
};

export default SingleCar;