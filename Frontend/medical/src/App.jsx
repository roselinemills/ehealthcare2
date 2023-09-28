// import { useState } from 'react'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css'

import Admin from './admin/home'
import UserPage from './user/userHome'
import AdminLanding from './admin/adminLanding'
import AddItem from './admin/additem'
import ViewItem from './admin/viewitem'
import EachPro from './admin/eachitem/eachpro'
import UpdateItem from './admin/eachitem/updateitem'

function App() {

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route element={<Admin/>} path='/admin'>
          <Route element={<AdminLanding/> } index></Route>
          <Route element={<AddItem/>} path='store'></Route>
          <Route  path='viewall'>
            <Route element={<ViewItem/>} index></Route>
            <Route element={<EachPro/>} path="eachitem"></Route>
            <Route element={<UpdateItem/>} path="edit"></Route>
          </Route>
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
