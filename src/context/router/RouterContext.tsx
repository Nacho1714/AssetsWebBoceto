import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router-dom";

import App from "../../App";
import DashboardLayout from "../../layouts/DashboardLayout";
import Login from "../../pages/auth/Login";
import { whiteList } from "../../config/router";

// react-router-dom
export const router = createBrowserRouter([
    {
        Component: App, // root layout route
        children: [
            {
                path: '/',
                Component: DashboardLayout,
                children: whiteList.map((list) => ({
                    path: list.path,
                    Component: list.component
                }))
            },
            {
                path: '/login',
                Component: Login
            }
        ],
    },
]);

// Provider
export const RouterProvider = (): JSX.Element => ( <ReactRouterProvider router={router} /> )