import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Bookings = () => {
    const cars = useLoaderData();
    const {_id, title, price, img} = cars;

    const handleBooking=event=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const price = form.price.value;
        const date = form.date.value;
        const time = form.time.value;

        const booking={
            name,
            price,
            date,
            time,
            img
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('your booking successful')
                form.reset()
            }
        })
    }

    return (
           <div className='bg-black '>
            <div className='flex flex-col justify-center items-center md:min-h-screen'>
            <h2 className='text-center uppercase text-8xl font-semibold text-white font-title'>book your car</h2>
            <div className='flex items-center justify-center'>
            <div className='w-fit'>
                <img src={img} alt="" />
            </div>
             <div className="hero w-fit">
            <div className="hero-content ">
                <div className="card bg-base-100 shadow-2xl">
                <form onSubmit={handleBooking} className="card-body">
                    <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Car Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={title} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' defaultValue={price}  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date'  className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Time</span>
                    </label>
                    <input type="time" name='time'  className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <input className="btn bg-red-700 text-white" type="submit" value="Confirm Booking" />
                    </div>
                </form>
                </div>
            </div>
            </div>

           </div>
            </div>
           </div>
    );
};

export default Bookings;