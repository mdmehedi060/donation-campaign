import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root/Root';
import Home from './Pages/Home/Home';
import Errorpage from './Pages/Home/Errorpage/Errorpage';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import Donates from './Components/Donates/Donates';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch("/donation.json")
      },
      {
        path:"/donation",
        element:<Donation></Donation>,
        loader: ()=> fetch('/donation.json'),
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/donates/:id",
        element:<Donates></Donates>,
        loader: ()=>fetch('/donation.json'),
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />v
  </React.StrictMode>,
)
