import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    const handleAdddoctor = (data) => {
        console.log(data)
    }
    return (
        <div className='w-96 p-7'>
            <h1 className='text-3xl'>Add Doctor</h1>
            <form onSubmit={handleSubmit(handleAdddoctor)} >

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
                    {errors.Email ? <input style={{ border: '1px solid red' }} type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Enter doctor's email" className="input input-bordered w-full max-w-xs" /> : <input type="email" {...register("Email", { required: "Email Address is required", pattern: { value: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/, message: 'Please enter a valid email address' } })} placeholder="Type here your email" className="input input-bordered w-full max-w-xs" />}
                    {/* <input type="email" {...register("Email", { required: "Email Address is required" })} placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                    {errors.Email && <p className='text-red-800 font-bold' role="alert">{errors.Email?.message}</p>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                        <span className="label-text-alt">Type carefully</span>
                    </label>


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
                <input className="btn btn-outline btn-secondary w-full" value="Register" type="submit" />

            </form>

        </div>
    );
};

export default AddDoctor;