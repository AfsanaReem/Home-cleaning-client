import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog";
import Details from "../Pages/Details";
import Review from "../Pages/Review";
import Services from "../Components/Services";
import Main from "../Layout/Main";
import Home from "../Pages/Home";

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
                element: <Services></Services>
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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]

    }
]);

export default router;