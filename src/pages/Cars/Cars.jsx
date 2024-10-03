import React, { useEffect, useState } from 'react';
import offerCar from '../../assets/imgs/offeer-car.png'
import Car from './Car';
const Cars = () => {
   const [cars, setCars]= useState([]);

   useEffect(()=>{
    fetch('http://localhost:5000/cars')
    .then(res=>res.json())
    .then(data=>setCars(data))
   },[])

    return (
        <div>
            <div className='bg-red-700 flex justify-between items-center text-white md:px-16 px-8'>
            <div className='w-full py-3'>
                <h2 className='md:text-6xl text-2xl font-title font-semibold'>Countries Best Luxury Cars</h2>
                <p className='md:text-2xl md:mt-3 font-medium'>We are here for your luxury ride</p>
            </div>
            <div className='w-full'>
            <img src={offerCar} alt="" />
            </div>
            </div>
                    <div className='grid md:grid-cols-4 gap-5 my-10 items-center px-5'>
                        {
                            cars.map(car=><Car
                            key={car._id}
                            car={car}></Car>)
                        }
                    </div>
        </div>
    );
};

export default Cars;