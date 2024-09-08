import React, { useState } from 'react'
import Navbar from '../components/navabar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Popup from '../components/popup/Popup'
function Layout() {
  const [orderPopup , setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Outlet/>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </>
  )
}

export default Layout