import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const MyBookings = () => {
    const [booked, deleteBooked] = useState([])
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/booking?email=${user?.email}`;
    const { data: bookedPackages = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    console.log(bookedPackages)

    const handleDelete = id => {
        const proceed = window.confirm('Want To Delete, Think Again?')
        if (proceed) {
            fetch(` http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Canceled Successfully')
                        const remaining = booked.filter(sel => sel._id !== id)
                        deleteBooked(remaining)
                        refetch()
                    }
                })
        }
    }
    return (
        <div className='flex justify-center mt-10 mb-20'>
            <div className='w-5/6'>
                <h2 className="text-3xl font-bold text-green-800 mt-10 mb-10">My Bookings</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Tickets</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookedPackages.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.ticket}</td>
                                    <td><button className='btn btn-success'>Edit</button></td>
                                    <td><button onClick={() => handleDelete(user._id)} className='btn btn-primary'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;