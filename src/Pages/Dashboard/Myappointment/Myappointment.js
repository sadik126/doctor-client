import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import Confirmationmodal from '../../Shared/Confirmationmodal/Confirmationmodal';
import Loading from '../../Shared/Loading/Loading';

const Myappointment = () => {
    const [deletingAppointment, setdeletingAppointment] = useState(null)

    const closeModal = () => {
        setdeletingAppointment(null)
    }
    const { user } = useContext(AuthContext)

    const url = `https://doctor-server-site.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [], isLoading, refetch } = useQuery({
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

    const deleteBooking = appointment => {
        fetch(`https://doctor-server-site.vercel.app/bookings/${appointment._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`${appointment.patient} is deleted`)
                    refetch()
                }

            })
    }

    if (isLoading) {
        <Loading></Loading>
    }
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
                            <th>Price</th>
                            <th>Payment</th>
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
                                    <td>{booking.price}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button class="btn btn-xs btn-success">Make payment</button></Link>
                                        }

                                        {
                                            booking.price && booking.paid && <span className='text-success'>Paid</span>
                                        }



                                    </td>
                                    <td><label onClick={() => setdeletingAppointment(booking)} htmlFor="confirmation-modal" className='btn btn-xs btn-error'>Delete</label></td>
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
                    deleteDoctor={deleteBooking}

                ></Confirmationmodal>
            }

        </div>
    );
};

export default Myappointment;