import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Homscreen from "../pages/Homscreen"
import Register from "../pages/Auth/Register"
import Signin from "../pages/Auth/Signin"

export const mainrouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
           {
            index:true,
            element:<Homscreen/>,
           }
        ]

       
    },
    {
        path:"/register",
        element:<Register/>,

    },
    {
        path:"/SignIn",
        element:<Signin/>,

    }
])