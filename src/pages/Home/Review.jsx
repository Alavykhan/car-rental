import React from 'react';
import ReactStars from "react-rating-stars-component";
import { SiComma } from "react-icons/si";
const Review = ({review}) => {
    const {name, description, rating, image} = review;
    return (
        <div className='w-[300px] h-[300px] p-5 relative rounded-lg bg-stone-100 text-black'>
            <div className='flex gap-5 items-center'>
                <img src={image} className='w-1/4 rounded-xl' alt="" />
                <div>
                    <h2>{name}</h2>
                    <ReactStars
                    count={rating}
                    onChange={Review}
                    size={24}
                    color="#fad02c"
                />
                </div>
            </div>
            <p className='pt-4 text-justify'>{description}</p>
         <div className='flex absolute bottom-5 right-4'>
         <SiComma className='text-red-700 text-xl' />
         <SiComma className='text-red-700 text-xl' />
         </div>
        </div>
    );
};

export default Review;