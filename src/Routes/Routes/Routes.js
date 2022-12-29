import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
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
                element: <h1>Packages</h1>
            },
            {
                path: '/about',
                element: <h1>About</h1>
            },
            {
                path: '/login',
                element: <h1>Login</h1>
            },
            {
                path: '/signup',
                element: <h1>Signup</h1>
            },
            {
                path: '/blog',
                element: <h1>blog</h1>
            },
        ]
    }
])

export default router;