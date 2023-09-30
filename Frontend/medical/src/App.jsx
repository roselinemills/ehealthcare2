// import { useState } from 'react'

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate} from 'react-router-dom'
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
import { useSelector } from "react-redux";

import { loggin, logginA, selectAdmin, selectUser } from './features/details'
import AuthProvider from './util/auth'

function App() {

  let logged = useSelector(loggin);

  let alogged = useSelector(logginA)
  // let navigate = useNavigate()


console.log(logged,"Loggggggg")
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route element={<Admin/>} path='/admin'>
          <Route element={<AdminLanding/> } index></Route>
          <Route element={<AddItem/>} path='store'></Route>
          {alogged?"":<Route element={<LoginAdmin/>} path='login'></Route>}
          {alogged?"":<Route element={<SignupAdmin/>} path='create'></Route>}
          <Route  path='viewall'>
            <Route element={<AuthProvider/>}>
            <Route element={<ViewItem/>} index></Route>
            <Route element={<EachPro/>} path="eachitem"></Route>
            <Route element={<UpdateItem/>} path="edit"></Route>
            </Route>

          </Route>
        </Route>
        <Route element={<UserPage/>} path='/'>
          <Route element={<UserLanding/>} index></Route>
          <Route element={<ViewItems/>} path="eachitem"></Route>
         {logged?<Route element={<UserLanding/>} index></Route>: <Route element={<LoginUser/>} path='login'></Route>}
         {logged?<Route element={<UserLanding/>} index></Route>:<Route element={<SignupUser/>} path='create'></Route>}
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
