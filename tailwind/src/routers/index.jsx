import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import FormPages from "../pages/formMain";
export const routers = createBrowserRouter([
    {
        index:true,
        element:<Home/>
    },
    {
        path:"/login",
        element:<FormPages/>
    }
])