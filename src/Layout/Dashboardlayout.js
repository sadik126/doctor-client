import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
import Useadmin from '../Pages/Dashboard/hooks/useAdmin/Useadmin';
import Header from '../Pages/Shared/Header/Header';

const Dashboardlayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = Useadmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu bg-base-300 p-4 w-80  text-base-content">

                        <li><Link to='/dashboard'>My appointments</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/users'>Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage doctor</Link></li>
                                <li><Link to='/dashboard/Allbookings'>Manage Appointments</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboardlayout;