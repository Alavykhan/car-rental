import React from 'react';
import photo1 from '../../assets/imgs/about-us-1.jpg'
import photo2 from '../../assets/imgs/about-us-2.jpg'
const AboutUs = () => {
    return (
        <div className='flex gap-10 justify-between px-16 mt-20'>
            <div className='text-white w-2/6 text-justify'>
            <h2 className='font-title text-5xl font-semibold'>About Us</h2>
            <p className='mt-10'>Welcome to RentBD, your premier luxury car rental service in Dhaka. We specialize in providing an exceptional driving experience with a diverse fleet of high-end vehicles tailored to meet your needs. Whether it’s for a special occasion, business travel, or simply to explore the city in style, our meticulously maintained cars and professional chauffeurs ensure comfort and sophistication every mile of the way.</p>
            <p className='mt-10'>At RentBD, we are committed to delivering unparalleled service and a seamless booking experience, so you can focus on enjoying the journey. Experience luxury like never before with RentBD!</p>
            </div>
            <div className='flex gap-5'>
                <img className='rounded-xl w-6/12' src={photo1} alt="" />
                <div>
                    <div className='bg-stone-200 rounded-lg text-black text-center py-4 '>
                        <p className='font-title text-5xl font-semibold'>10+ years</p>
                        <p className='text-xl pt-2'>Experience</p>
                    </div>
                    <div className='mt-5'>
                        <img className='rounded-lg' src={photo2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;