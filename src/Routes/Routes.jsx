import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import SingleCar from "../pages/SingleCar/SingleCar";
import Bookings from "../pages/Bookings/Bookings";
import Cars from "../pages/Cars/Cars";
import MyBookings from "../pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";

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
          element:<PrivateRoute><Bookings/></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)   
        },
        {
          path:'cars',
          element:<Cars/>
        },
        {
          path:'/mybookings',
          element:<PrivateRoute><MyBookings/></PrivateRoute>,
        }
      ]
    },
  ]);

  export default router;