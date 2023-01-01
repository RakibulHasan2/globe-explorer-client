import { createBrowserRouter } from "react-router-dom";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ALLPackages from "../../Pages/Packages/Packages/ALLPackages/ALLPackages";
import PackagesCard from "../../Pages/Packages/Packages/PackagesCard/PackagesCard";
import PackagesDetails from "../../Pages/Packages/PackagesDetails/PackagesDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from './../../Layout/Main/Main';

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/packages',
                element: <ALLPackages></ALLPackages>
            },
            {
                path: '/packages/:id',
                loader: async({params}) =>await fetch(`http://localhost:5000/packages/${params.id}`),
                element: <PrivateRoute><PackagesDetails></PackagesDetails></PrivateRoute>
            },
            {
                path: '/myBookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/about',
                element: <h1 className="text-4xl font-bold text-center mt-10 mb-10">About Page, its under construction</h1>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default router;