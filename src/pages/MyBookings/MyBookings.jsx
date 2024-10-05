import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import SingleBookings from './SingleBookings';

const MyBookings = () => {
    const {user}= useContext(AuthContext);
    console.log(user?.email);
    const [bookings, setBookings]= useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBookings(data)
        })
    },[url])

    const handleDelete = id=>{
        const proceed = confirm('are you want to delete your booking?')
        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE",
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('your bookings delete successfully');
                    const remaining = bookings.filter(booking=>booking._id !== id)
                    setBookings(remaining);
                }
            })
        }
    }


    return (
        <div>
            <div className="overflow-x-auto h-screen ">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody className=''>
                    {
                        bookings.map(booking=><SingleBookings
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        ></SingleBookings>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyBookings;