import React from 'react';

const SingleBookings = ({booking, handleDelete}) => {
    const {img, carName, date, time, price, _id }= booking
   
    console.log(booking);
    return (
            <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="h-12 w-24">
                            <img
                            src={img}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                    </div>
                    </td>
                    <td>
                    {carName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{date}</span>
                    </td>
                    <td>{time}</td>
                    <th>
                    <span className="btn btn-ghost btn-xs">{price}</span>
                    </th>
                    <th>
                    <button onClick={()=>handleDelete(_id)} className="btn bg-red-700 btn-sm text-white">Delete</button>
                    </th>
                </tr>
    );
};

export default SingleBookings;