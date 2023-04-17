import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './components/Shop/Shop'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BoiMela from './components/BoiMela/BoiMela'
import Layout from './Layout/Layout'
import Main from './Layout/Main'
import Publications from './components/Publications/Publications'
import Review from './components/Review/Review'
import Details from './components/Details/Details'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "/boimela",
          element: <BoiMela></BoiMela>,
        },
        {
          path: "/publication",
          element: <Publications></Publications>,
        },
        {
          path: "/review",
          element: <Review></Review>,
        },
        {
          path: "/details/:detailsID",
          loader: async () => {
            return fetch('books.json')
          },
          element: <Details></Details>,
        },

      ]
    },

  ]);

  return (
    <div >
      {/* <Navbar></Navbar>
      <Banner></Banner>
      <Shop></Shop> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
