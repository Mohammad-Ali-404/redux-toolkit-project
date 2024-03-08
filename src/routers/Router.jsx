import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../layout/Main";
import Videos from "../Pages/Videos/Videos";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"videosDetails/:id",
                element:<Videos/>
            }
        ]
        
    }
])
export default router;