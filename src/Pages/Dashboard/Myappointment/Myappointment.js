import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';

const Myappointment = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5080/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    auth: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl'>My appointments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>phone</th>
                            <th>slot</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map((booking, i) =>

                                <tr className="hover" key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.slot}</td>
                                    <td><button className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>
                            )
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Myappointment;