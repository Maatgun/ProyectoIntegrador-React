import React from 'react'
import { Routes as ReactDomRoutes, Route } from "react-router-dom"
import Contacto from '../pages/Contacto/Contacto'
import Home from '../pages/Home/Home'
import Productos from '../pages/Productos/CardsProductos'
import AboutUs from '../pages/AboutUs/AboutUs'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes'
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import Checkout from '../pages/Checkout/Checkout'
import Resumen from '../pages/Resumen/Resumen'


const Routes = () => {
  return (
      <ReactDomRoutes>
        <Route path='/' element={<Home/>} />
        <Route path='/Productos' element={<Productos/>} />
        <Route path='/Contacto' element={<Contacto/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path ='*' element={<PageNotFound/>}/>
        <Route path ='/login'element={<Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/mis-ordenes" element={<MisOrdenes />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/felicitaciones" element={<Felicitaciones />} />



      <Route
        path="/checkout"
        element={
          <ProtectedRoute redirectTo='/login' >
            <Checkout />
          </ProtectedRoute>
        }
      />
      </ReactDomRoutes>
  


        
  );
}

export default Routes