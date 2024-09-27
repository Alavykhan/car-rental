import React from 'react';

const Car = ({car}) => {
    const {id, title, img, price}= car;
    // console.log(id);
    return (
        <div>
             {/* <div
            key={id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
            >
            <div
                style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                {title}
                </p>
            </div>
            </div> */}
            <div className='w-[500px] h-[350px] bg-stone-100 rounded-xl text-black'> 
            <h2 className='font-semibold font-title text-xl pl-7 pt-5'>{title}</h2>
            <p className='font-medium text-lg pl-7'>${price}<span className='text-base text-stone-500'>/day</span></p>
            <div className='flex justify-center items-center'>
            <img src={img} className='w-11/12' alt="" />
            </div>
        </div>
        </div>
    );
};

export default Car;