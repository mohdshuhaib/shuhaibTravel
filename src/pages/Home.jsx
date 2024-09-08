import React, { useState } from 'react'
import homev from '../assets/homev.mp4'
import Hero from '../components/hero/Hero'
import Places from '../components/places/Places'
import BannerImg from '../components/banner/BannerImg'
import poster from '../assets/banner.jpg'
import Blogs from './Blogs'
import Banner from '../components/banner second/Banner'
import Testimonials from './Testimonials'
import poster2 from '../assets/banner2.jpg'
import Popup from '../components/popup/Popup'

const Home = () => {
  const [orderPopup , setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }
  return (
    <>
    <div>
      <div className='relative h-[700px]'>
        <video autoPlay loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
          <source src={homev} type='video/mp4'/>
        </video>
        <Hero/>
      </div>
      <Places handleOrderPopup={handleOrderPopup}/>
      <BannerImg img={poster}/>
      <Blogs/>
      <Banner/>
      <BannerImg img={poster2}/>
      <Testimonials/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
    </>
  )
}

export default Home