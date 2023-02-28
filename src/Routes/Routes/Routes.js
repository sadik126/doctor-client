import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Managedoctors from "../../Pages/Dashboard/Managedoctors/Managedoctors";
import Myappointment from "../../Pages/Dashboard/Myappointment/Myappointment";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Signup/Signup";
import Adminroute from "../Adminroute/Adminroute";

import Privateroute from "../Privateroute/Privateroute/Privateroute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/signup',
                element: <Signup></Signup>

            }, {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Privateroute><Dashboardlayout></Dashboardlayout></Privateroute>,
        children: [
            {
                path: '/dashboard',
                element: <Myappointment></Myappointment>
            },
            {
                path: '/dashboard/users',
                element: <Adminroute><Allusers></Allusers></Adminroute>
            },
            {
                path: '/dashboard/addDoctor',
                element: <Adminroute><AddDoctor></AddDoctor></Adminroute>
            },
            {
                path: '/dashboard/manageDoctor',
                element: <Adminroute><Managedoctors></Managedoctors></Adminroute>
            },

        ]
    }
])

export default router;