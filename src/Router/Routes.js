import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Details from "../Pages/Details";
import Review from "../Pages/Review";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import FAQ from "../Pages/FAQ";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";
import AddService from "../Pages/AddService";
import AddReview from "../Pages/AddReview";
import MyReview from "../Pages/MyReview";
import AllServices from "../Pages/AllServices";
import UpdateReview from "../Pages/UpdateReview";

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
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://home-cleaning-service-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/addreview/:id',
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://home-cleaning-service-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/updatereview/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://home-cleaning-service-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            }
        ]

    }
]);

export default router;