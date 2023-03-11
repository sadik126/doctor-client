import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Confirmationmodal from '../../Shared/Confirmationmodal/Confirmationmodal';

const Allbookings = () => {
    const [deletingAppointment, setdeletingAppointment] = useState(null)

    const closeModal = () => {
        setdeletingAppointment(null)
    }

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctor-server-site-gh8ey2dlu-sadik126.vercel.app/allbookings')
            const data = await res.json();
            return data;
        }
    })


    const deletingbookings = booking => {
        fetch(`https://doctor-server-site.vercel.app/allbookings/${booking._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast(`${booking.patient} is deleted`)
                    refetch()
                }

            })
    }
    return (
        <div>
            <h1 className='text-3xl'>All appointments</h1>
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
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Delete</th>
                            <th>
                                transactionId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {



                            [...bookings].reverse().map((booking, i) =>

                                <tr className="hover" key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking.price}</td>
                                    <td>

                                        {
                                            booking.paid ? <span className='text-success'>Payment successful</span> : <span className='text-error'>Payment is not confirmed</span>
                                        }
                                    </td>

                                    <td><label onClick={() => setdeletingAppointment(booking)} htmlFor="confirmation-modal" className='btn btn-xs btn-error'>Delete</label></td>
                                    <td>{booking.
                                        transactionId}</td>
                                </tr>
                            )
                        }
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>


            {
                deletingAppointment && <Confirmationmodal
                    title={`Are your sure you want to delete?`}
                    message={`If you delete ${deletingAppointment.patient}. it can not be undone`}
                    closeModal={closeModal}
                    modaldata={deletingAppointment}
                    deleteDoctor={deletingbookings}

                ></Confirmationmodal>
            }

        </div>
    );
};

export default Allbookings;