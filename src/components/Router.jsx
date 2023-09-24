import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Services from '../pages/Services/Services'
import ServicesData from '../pages/Services/ServicesData'
import PNF from '../pages/PageNotFound/PNF'

const Router = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/services/:service' element={<ServicesData />}/>
        <Route path="*" element={<PNF />} />
      </Routes>
    </>
  )
}

export default Router