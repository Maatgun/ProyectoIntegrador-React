import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Productos from '../pages/Productos/CardsProductos'
import AboutUs from '../pages/AboutUs/AboutUs'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'


const Routes = () => {
  return (

    <BrowserRouter>
    <Layout>
      <ReactDomRoutes>
        <Route path='/' element={<Home/>} />
        <Route path='Productos' element={<Productos/>} />
        <Route path='Contacto' element={<Contacto/>} />
        <Route path='AboutUs' element={<AboutUs/>} />
        <Route path ='*' element={<PageNotFound/>}/>
        <Route path ='Login'element={<Login/>}/>
        <Route path="/register" element={<Register />} />
      </ReactDomRoutes>
    </Layout>
    </BrowserRouter>
  )
}

export default Routes