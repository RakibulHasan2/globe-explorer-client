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
                path: '/login',
                element: <h1>blog</h1>
            },
            {
                path: '/signup',
                element: <h1>blog</h1>
            },
            {
                path: '/blog',
                element: <h1>blog</h1>
            },
        ]
    }
])

export default router;