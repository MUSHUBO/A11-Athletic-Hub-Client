import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import NotFound from "../pages/Error/NotFound";
import Terms from "../pages/Terms&Privacy/Terms";
import Privacy from "../pages/Terms&Privacy/Privacy";
import CreateEvent from "../features/Events/CreateEvent";
import AllEvents from "../features/Events/AllEvents";
import MyBookings from "../features/Events/MyBookings";
import BookEvent from "../features/Events/bookEvent";
import PrivateRoute from "../provider/PrivateRoute";

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
                path: '/allEvents',
                Component: AllEvents,
                loader: () => fetch('http://localhost:3000/events')
            },
            {
                path: '/create-event',
                element: (
                    <PrivateRoute>
                        <CreateEvent></CreateEvent>
                    </PrivateRoute>
                )
            },
            {
                path: '/book-event',
                element: (
                    <PrivateRoute>
                        <BookEvent></BookEvent>
                    </PrivateRoute>
                )
            },
            {
                path: '/myBookings',
                element: (
                    <PrivateRoute>
                        <MyBookings></MyBookings>
                    </PrivateRoute>
                )
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