import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Bookings = () => {
    const cars = useLoaderData();
    const {_id, title, price, img} = cars;
    return (
           <div className='bg-black '>
            <h2>book your car</h2>
            <div className='flex items-center justify-center min-h-screen'>
            <div className='w-fit'>
                <img src={img} alt="" />
            </div>
             <div className="hero w-fit">
            <div className="hero-content ">
                <div className="card bg-base-100 shadow-2xl">
                <form className="card-body">
                    <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Car Name</span>
                    </label>
                    <input type="text" defaultValue={title} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" defaultValue={price}  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date"  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Time</span>
                    </label>
                    <input type="time"  className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-red-700 text-white">Confirm Booking</button>
                    </div>
                </form>
                </div>
            </div>
            </div>

           </div>
           </div>
    );
};

export default Bookings;