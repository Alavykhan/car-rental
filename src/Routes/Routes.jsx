import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import SingleCar from "../pages/SingleCar/SingleCar";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'signup',
          element:<Signup/>
        },
        {
          path:'/singlecar/:id',
          element: <SingleCar/>,
          loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
        },
        {
          path:'/bookings/:id',
          element:<Bookings/>,
          loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)   
        }
      ]
    },
  ]);

  export default router;