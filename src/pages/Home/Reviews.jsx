import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='md:my-20 my-10'>
            <h2 className='md:text-5xl font-title font-semibold text-white text-center pb-10'>What People Think About Us</h2>
         <div className='flex md:flex-row flex-col justify-center items-center gap-8'>
            {
                reviews.map(review=><Review
                key={review.id}
                review={review}></Review>)
            }
         </div>
        </div>
    );
};

export default Reviews;