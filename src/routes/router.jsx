import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Events from "../features/Events/Events";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import NotFound from "../pages/Error/NotFound";
import Terms from "../pages/Terms&Privacy/Terms";
import Privacy from "../pages/Terms&Privacy/Privacy";

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
            {
                path: '/events',
                Component: Events
            },
            {
                path: '/create-event',
                element: <div>Create Event</div>
            },
            {
                path: '/book-event',
                element: <div>book event</div>
            },
            {
                path: '/myBookings',
                element: <div>My Bookings</div>
            },
            {
                path: '/terms',
                Component: Terms
            },
            {
                path: '/privacy',
                Component: Privacy
            },
        ]
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
        ]
    },
    {
        path: '/*',
        Component: NotFound
    }
]);

export default router;