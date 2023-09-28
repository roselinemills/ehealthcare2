// import { useState } from 'react'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css'

import Admin from './admin/home'
import UserPage from './user/userHome'
import AdminLanding from './admin/adminLanding'
import AddItem from './admin/additem'
import ViewItem from './admin/viewitem'

function App() {

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route element={<Admin/>} path='/admin'>
          <Route element={<AdminLanding/> } index></Route>
          <Route element={<AddItem/>} path='store'></Route>
          <Route element={<ViewItem/>} path='viewall'></Route>
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
