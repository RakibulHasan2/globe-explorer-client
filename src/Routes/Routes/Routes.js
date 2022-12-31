import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ALLPackages from "../../Pages/Packages/Packages/ALLPackages/ALLPackages";
import PackagesCard from "../../Pages/Packages/Packages/PackagesCard/PackagesCard";
import PackagesDetails from "../../Pages/Packages/PackagesDetails/PackagesDetails";
import SignUp from "../../Pages/SignUp/SignUp";
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
                path: '/shop',
                element: <h1>Shop</h1>
            },
            {
                path: '/packages',
                element: <ALLPackages></ALLPackages>
            },
            {
                path: '/packages/:id',
                loader: async({params}) =>await fetch(`http://localhost:5000/packages/${params.id}`),
                element: <PackagesDetails></PackagesDetails>
            },
            {
                path: '/myBookings',
                element: <h1>hello</h1>
            },
            {
                path: '/about',
                element: <h1>hello</h1>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <h1>blog</h1>
            },
        ]
    }
])

export default router;