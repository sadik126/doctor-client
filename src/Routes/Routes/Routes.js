import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../../Layout/Dashboardlayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import Allbookings from "../../Pages/Dashboard/Allbookings/Allbookings";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Managedoctors from "../../Pages/Dashboard/Managedoctors/Managedoctors";
import Myappointment from "../../Pages/Dashboard/Myappointment/Myappointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Errorelement from "../../Pages/Shared/Error/Errorelement";
import Signup from "../../Signup/Signup";
import Adminroute from "../Adminroute/Adminroute";

import Privateroute from "../Privateroute/Privateroute/Privateroute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorelement></Errorelement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
            {
                path: '/dashboard/Allbookings',
                element: <Adminroute><Allbookings></Allbookings></Adminroute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Adminroute><Payment></Payment></Adminroute>,
                loader: ({ params }) => fetch(`https://doctor-server-site.vercel.app/bookings/${params.id}`)
            },

        ]
    }
])

export default router;