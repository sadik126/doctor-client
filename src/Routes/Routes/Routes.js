import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Signup/Signup";

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
    }
])

export default router;