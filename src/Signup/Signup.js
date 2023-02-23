import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../src/assets/images/child-visiting-the-pediatrician.png'
import { AuthContext } from '../Contexts/Authprovider';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const { createUser } = useContext(AuthContext)

    const [signupError, setsignupError] = useState('')

    const auth = getAuth(app);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const nevigate = useNavigate()

    const handleLogin = async data => {
        console.log(data)
        setsignupError('')
        await createUser(data.Email, data.Password)
            .then(async result => {
                const user = result.user;
                console.log(user)
                saveuser(data.Name, data.Email, data.Password)

                toast('User created successfully')
                // const userInfo = {
                //     displayName: data.Name
                // }

            })
            .catch(err => {
                console.log(err)
                setsignupError(err.message)
            })

        await updateProfile({ displayName: data.Name })


        // .then(() => {

        // })
        // .catch(error => {
        //     console.log(error)
        //     setsignupError(error.message)

        // })


    }

    const saveuser = (Name, Email, Password) => {
        const users = { Name, Email, Password }
        fetch('http://localhost:5080/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                getusertoken(Email)

            })
    }

    const getusertoken = (email) => {
        fetch(`http://localhost:5080/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    nevigate('/')
                }

            })
    }
    return (
        <div className='h-[600px] flex justify-center items-center my-10'>
            <div className='hero-content flex-col lg:flex-row gap-64'>

                <img src={signup} className="max-w-sm rounded-lg " alt="" />

                <div className='w-96 p-7 formbg'>
                    <h2 className='text-4xl'>Sign up</h2>
                    <form onSubmit={handleSubmit(handleLogin)} >

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                                <span className="label-text-alt">Type carefully</span>
                            </label>
                            {errors.Name ? <input style={{ border: '1px solid red' }} type="text" {...register("Name", { required: "Name is required" })} placeholder="Type here your name" className="input input-bordered w-full max-w-xs" /> : <input type="text" {...register("Name", { required: "Name is required", minLength: { value: 3, message: 'Your name should be minimum 3 charecters' }, maxLength: { value: 20, message: "Not longer than 20 charecters" }, pattern: { value: /^[a-zA-Z-/.\' ']{3,20}$/, message: 'Dont use any number in your name' } })} placeholder="Type here your Name" className="input input-bordered w-full max-w-xs" />}
                            {/* <input type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                            {errors.Name && <p className='text-red-800 font-bold' role="alert">{errors.Name?.message}</p>}

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                                <span className="label-text-alt">Type carefully</span>
                            </label>
                            {errors.Email ? <input style={{ border: '1px solid red' }} type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here your name" className="input input-bordered w-full max-w-xs" /> : <input type="email" {...register("Email", { required: "Email Address is required", pattern: { value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/, message: 'Please enter a valid email address' } })} placeholder="Type here your email" className="input input-bordered w-full max-w-xs" />}
                            {/* <input type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                            {errors.Email && <p className='text-red-800 font-bold' role="alert">{errors.Email?.message}</p>}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="label-text-alt">Keep secret</span>
                            </label>

                            {
                                errors.Password ? <input style={{ border: '1px solid red' }} type="password" {...register("Password", { required: "Password is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> : <input type="password" {...register("Password", { required: "Password is required", minLength: { value: 6, message: 'password should be 6 charecters' }, pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: 'please try  at least one letter and one number' } })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            }
                            {/* <input type="password" {...register("Password", { required: "Password is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}

                            {errors.Password && <p className='text-red-800 font-bold' role="alert">{errors.Password?.message}</p>}

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                                <span className="label-text-alt">Keep secret</span>
                            </label>

                            {
                                errors.cPassword ? <input style={{ border: '1px solid red' }} type="password" {...register("cPassword", { required: "Confirm Password is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> : <input type="password" {...register("cPassword", {
                                    required: "Confirm Password is required", validate: (val) => {
                                        if (watch('Password') != val) {
                                            return "Your passwords do no match";
                                        }
                                    },
                                })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            }
                            {/* <input type="password" {...register("Password", { required: "Password is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}

                            {errors.cPassword && <p className='text-red-800 font-bold' role="alert">{errors.cPassword?.message}</p>}

                        </div>

                        <label className="label">
                            {/* <span className="label-text">Forget Password</span> */}

                        </label>

                        {/* <input {...register("firstName")} placeholder="First name" />
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" /> */}
                        {/* <p>{data}</p> */}
                        <input className="btn btn-outline btn-accent w-full" value="Register" type="submit" />

                    </form>
                    {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    }
                    <p>Already have an account? < Link to='/login' className='text-orange-700'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-succes w-full">Sign with Google</button>
                </div>

            </div>

        </div>
    );
};

export default Signup;