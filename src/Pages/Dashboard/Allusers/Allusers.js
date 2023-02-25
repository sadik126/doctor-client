import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allusers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5080/users')
            const data = await res.json();
            return data;
        }
    })


    const handlemakeadmin = (id) => {
        fetch(`http://localhost:5080/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully')
                    refetch();
                }
                console.log(data)
            })
    }
    return (
        <div>
            <h1 className='text-3xl'>All users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((user, i) => <tr key={user._id} className='hover'>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handlemakeadmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>{user?.role !== 'admin' && <button className='btn btn-xs btn-error'>Delete</button>}</td>



                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Allusers;