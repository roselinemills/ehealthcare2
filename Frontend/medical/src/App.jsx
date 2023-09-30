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
import UserLanding from './user/landing'
import ViewItems from './user/viewItem'
import LoginUser from './user/account/login'
import SignupUser from './user/account/signup'
import LoginAdmin from './admin/account/login'
import SignupAdmin from './admin/account/signup'

function App() {

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route element={<Admin/>} path='/admin'>
          <Route element={<AdminLanding/> } index></Route>
          <Route element={<AddItem/>} path='store'></Route>
          <Route element={<LoginAdmin/>} path='login'></Route>
          <Route element={<SignupAdmin/>} path='create'></Route>
          <Route  path='viewall'>
            <Route element={<ViewItem/>} index></Route>
            <Route element={<EachPro/>} path="eachitem"></Route>
            <Route element={<UpdateItem/>} path="edit"></Route>
          </Route>
        </Route>
        <Route element={<UserPage/>} path='/'>
          <Route element={<UserLanding/>} index></Route>
          <Route element={<ViewItems/>} path="eachitem"></Route>
          <Route element={<LoginUser/>} path='login'></Route>
          <Route element={<SignupUser/>} path='create'></Route>
        </Route>
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
