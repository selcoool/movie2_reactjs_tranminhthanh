import React from 'react'
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
// import Header from '../components/Header';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ManagementPage from '../pages/ManagementPage';
import ManageMovie from '../components/ManageMovie';
import ManageUser from '../components/ManageUser';
import DetailPage from '../pages/DetailPage';
import TheatrePage from '../pages/TheatrePage';

// import DetailPage from '../pages/DetailPage';
// import TheaterPage from '../pages/TheaterPage';
// import ListSeats from '../components/ListSeats';

function useRouteCustom() {

    const routes=useRoutes([
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/management",
        element:<ManagementPage/>,
        children:[
                {
                  path:"user",
                  element:<ManageMovie/>
                },
                {
                  path:"movie",
                  element:<ManageUser/>
                },
                {
                  path:"*",
                  element:<ManageUser/>
                }
            ]

      },
      {
        path:"/detail/:tenPhim",
        element:<DetailPage/>
      },
      {
        path:"/theatre",
        element:<TheatrePage/>
      },
      // {
      //   path:"/film",
      //   element:<ErrorPage/>
      // },
   
    //   {
    //     path:"/theater",
    //     element:<TheaterPage/>,
    //     children:[
    //       {
    //         path:"book_ticket/:maLichChieu",
    //         element:<ListSeats/>
    //       }
    //   ]
    //   },
    //   {
    //     path:"/management",
    //     element:<ManagementPage/>,
    //   },
      // {
      // path:"/detail",
      // element:<Detail/>,
      // children:[
      //     {
      //       path:"dtdd",
      //       element:<DetailProduct/>
      //     },
      //     {
      //       path:"mt",
      //       element:<DetailProduct/>
      //     }
      // ]
      // },
      {
        path:"*",
        element:<ErrorPage/>
      }
  ])
  return  routes;
}

export default useRouteCustom