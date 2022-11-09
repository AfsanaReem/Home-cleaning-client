import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Review from "../Components/Review";
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
            }
        ]

    }
]);

export default router;