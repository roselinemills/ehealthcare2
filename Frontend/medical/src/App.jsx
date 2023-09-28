// import { useState } from 'react'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css'

import Admin from './admin/home'
import UserPage from './user/userHome'

function App() {

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route element={<Admin/>} path='/admin'>
          <Route ></Route>
          <Route></Route>
          <Route></Route>
        </Route>
        <Route element={<UserPage/>} path='/'></Route>
      </Route>
    </Route>
  )
)
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
