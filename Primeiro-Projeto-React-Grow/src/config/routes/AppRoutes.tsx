import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: "Kadu"
    }
])

export function AppRoutes(){
    return <RouterProvider router={router}/>
}