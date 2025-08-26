import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Bills from "../Pages/Bills";
import PrivateRoute from "./PrivateRoute";
import Edit from "../Edit";
import Loading from "./Loading";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children : [
            {
                index: true,
                Component: Home
            },

            {
                path: "/about",
                Component: About
            },

            {
                path: "/register",
                Component: Register
            },

            {
                path: "/login",
                Component: Login
            },
            {
                path: "/bills",
                element: <PrivateRoute><Bills></Bills></PrivateRoute>,
                loader: () => fetch('/billsata.json'),
                hydrateFallbackElement: <Loading></Loading>

            },

            {
              path: "/bills/:id",
                element: <PrivateRoute><Bills></Bills></PrivateRoute>,
               loader: () => fetch('/billsata.json'),
               hydrateFallbackElement: <Loading></Loading>
            },

            {
                path: "/edit",
                element: <PrivateRoute><Edit></Edit></PrivateRoute>
            }

           
        ]
    }
])