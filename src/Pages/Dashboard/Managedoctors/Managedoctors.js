import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Confirmationmodal from '../../Shared/Confirmationmodal/Confirmationmodal';
import Loading from '../../Shared/Loading/Loading';

const Managedoctors = () => {
    const [deletingDoctor, setdeletingDoctor] = useState(null)

    const closeModal = () => {
        setdeletingDoctor(null)
    }




    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5080/doctors')

                const data = await res.json();
                return data;


            }
            catch (error) {

            }
        }
    })


    const deleteDoctor = doctor => {
        fetch(`http://localhost:5080/doctors/${doctor._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast(`${doctor.name} is deleted`)
                    refetch()
                }

            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl'>Total Doctor :{doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>


                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            doctors.map((user, i) => <tr key={user._id} className='hover'>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.image} />
                                    </div>
                                </div></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-red-700'>{user.speciality}</td>

                                <td>{user?.role !== 'admin' && <label onClick={() => setdeletingDoctor(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>}</td>



                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <Confirmationmodal
                    title={`Are your sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. it can not be undone`}
                    closeModal={closeModal}
                    modaldata={deletingDoctor}
                    deleteDoctor={deleteDoctor}

                ></Confirmationmodal>
            }

        </div>
    );
};

export default Managedoctors;