import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import login from '../../src/assets/images/login.png'
import { AuthContext } from '../Contexts/Authprovider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signInUser, googlesignIN } = useContext(AuthContext)

    const [Loginerror, setLoginerror] = useState('')

    const auth = getAuth(app)

    const location = useLocation()

    const nevigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const googlesign = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                console.log(error)
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // // The email of the user's account used.
                // const email = error.customData.email;
                // // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            })
    }

    const handleLogin = data => {
        console.log(data)
        setLoginerror('')
        signInUser(data.Email, data.Password)
            .then(result => {
                const user = result.user;
                console.log(user)
                nevigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.code)
                if (err.code === 'auth/user-not-found') {
                    setLoginerror('This email adress is not registered')
                }
                else if (err.code === 'auth/wrong-password') {
                    setLoginerror('Please check your password')
                }
                else {
                    setLoginerror('An unknown error occurred.please try again later')
                }
                // setLoginerror(err.message)
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='hero-content flex-col lg:flex-row gap-64'>

                <img src={login} className="max-w-sm rounded-lg shadow-2xl" alt="" />

                <div className='w-96 p-7 formbg'>
                    <h2 className='text-4xl'>Login</h2>
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

                        {
                            Loginerror && <p className='text-red-700'>{Loginerror}</p>
                        }
                    </form>
                    <p>New to doctors portal? < Link to='/signup' className='text-orange-700'>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={googlesign} className="btn btn-outline btn-succes w-full">Sign with Google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;