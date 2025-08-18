import React from "react";
import ReactDOM from "react-dom/client";
import Cart from "./cart.jsx";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from "../components/layout.jsx";
import Details from "../pages/details.jsx";
import Homepage from "../pages/home.jsx";


const route  = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Homepage/>
      }
    ]
  },
  {
    path:"/:slug",
    element:<Details/>
  },

]
)


    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={route}>
          
        </RouterProvider>
      </React.StrictMode>
    )