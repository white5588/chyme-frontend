import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../static/Header'
import Footer from '../static/Footer'
import Detailed from '../../pages/Detailed'
import Product from '../../pages/Product'

const Layout = () => {
  return (
    <div>
        <Header/>
      <Outlet/>
      <Detailed/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default Layout
