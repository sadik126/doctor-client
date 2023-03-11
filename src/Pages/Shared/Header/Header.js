import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';
import Theme from '../../../Theme/Theme';
import './Header.css';
import logo from '../../../assets/images/logo-removebg-preview.png';

const Header = () => {
    const { user, Logout } = useContext(AuthContext)

    const nevigate = useNavigate();

    const handleLogout = () => {
        Logout()
            .then(() => {
                nevigate('/login')

            })
            .catch(err => console.log(err))
    }
    const menuItems = <>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/appointment' >Appointment</Link></li>
        <li><Link to='/dashboard' >Dashboard</Link></li>

        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {
            user?.uid ? <li><Link to='' className='text-orange-700'>Welcome  {user.displayName}</Link></li> : <li><Link to=''></Link></li>
        }
        <Theme></Theme>
        {/* <a className="btn">Get started</a> */}
        {
            user?.uid ? <button onClick={handleLogout} className="btn login">Log out</button> : <Link to={'/login'}><button className="btn login">Login</button></Link>
        }


    </>
    return (
        <div>
            <div className="navbar p-5 bg-base-100 justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Link to='/' className="normal-case text-xl"><img className='lg:w-4/12 sm:w-full' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {
                            menuItems
                        }



                    </ul>
                </div>

                <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
                    Menu
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

                {/* <div className=""> */}


                {/* <button className="btn lg:m-2.5 m-2 register">Register</button> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Header;