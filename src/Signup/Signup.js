import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import signup from '../../src/assets/images/child-visiting-the-pediatrician.png'

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='hero-content flex-col lg:flex-row gap-64'>

                <img src={signup} className="w-full rounded-lg shadow-2xl" alt="" />

                <div className='w-full p-7 formbg'>
                    <h2 className='text-4xl'>Sign up</h2>
                    <form onSubmit={handleSubmit(handleLogin)} >


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                                <span className="label-text-alt">Type carefully</span>
                            </label>
                            {errors.Email ? <input style={{ border: '1px solid red' }} type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here your name" className="input input-bordered w-full max-w-xs" /> : <input type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here your email" className="input input-bordered w-full max-w-xs" />}
                            {/* <input type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                            {errors.Email && <p className='text-red-800 font-bold' role="alert">{errors.Email?.message}</p>}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="label-text-alt">Keep secret</span>
                            </label>

                            {
                                errors.Password ? <input style={{ border: '1px solid red' }} type="password" {...register("Password", { required: "Password is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> : <input type="password" {...register("Password", { required: "Password is required", minLength: { value: 6, message: 'password should be 6 charecters' } })} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            }
                            {/* <input type="password" {...register("Password", { required: "Password is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}

                            {errors.Password && <p className='text-red-800 font-bold' role="alert">{errors.Password?.message}</p>}

                        </div>

                        <label className="label">
                            <span className="label-text">Forget Password</span>

                        </label>

                        {/* <input {...register("firstName")} placeholder="First name" />
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" /> */}
                        {/* <p>{data}</p> */}
                        <input className="btn btn-outline btn-primary w-full" value="Login" type="submit" />
                    </form>
                    <p>Already have an account? < Link to='/login' className='text-orange-700'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-succes w-full">Sign with Google</button>
                </div>

            </div>

        </div>
    );
};

export default Signup;