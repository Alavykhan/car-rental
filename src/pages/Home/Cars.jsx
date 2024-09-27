import React from 'react';
import HorizontalScrollCarousel from './HorizontalScrollCarousel';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { useRef } from "react";


const Cars = () => {

    return (
        <div>
             <div className="bg-neutral-800">
              <div className="flex h-48 items-center justify-between px-16">
                <span className="font-semibold font-title uppercase text-neutral-500 text-white text-6xl">
                  Vehicles
                </span>
                <div className='flex justify-center gap-2'>
                  <div className='w-[60px] h-[30px] bg-black text-white rounded-lg flex justify-center items-center'>
                  <IoIosArrowRoundBack className='text-2xl' />
                  </div>
                  <div className='w-[60px] h-[30px] border border-white-4 text-white rounded-lg flex justify-center items-center'>
                  <IoIosArrowRoundForward className='text-2xl' />
                  </div>
                </div>
              </div>
              <HorizontalScrollCarousel/>
            </div>
        </div>
    );
};

export default Cars;