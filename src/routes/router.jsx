import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: '/',
                index: true,
                Component: Home
            },
        ]
    },
    {
        path: '/auth',
        element: <div>auth layout section</div>,
        children: [
            {
                path: '/auth/login',
                element: <div>Login</div>
            },
            {
                path: '/auth/register',
                element: <div>Register</div>
            },
        ]
    },
    {
        path: '/*',
        element: <div>Error 404</div> 
    }
]);

export default router;