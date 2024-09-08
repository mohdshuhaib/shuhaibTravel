import React from 'react'
import { Link } from 'react-router-dom'
import footerVid from '../../assets/footer.mp4'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import footerlogo from '../../assets/logo.jpg'
const FooterLinks = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'About',
    link: '/about',
    id: 1
  },
  {
    title: 'Best Places',
    link: '/best-places',
    id: 2
  },
  {
    title: 'Blogs',
    link: '/blogs',
    id: 3
  }
]

function Footer() {
  return (
    <div className='py-10 relative overflow-hidden'>
      <video autoPlay loop muted className='absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]'>
          <source src={footerVid} type='video/mp4'/>
      </video>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl'>
        <div className='py-8 px-4'>
          <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
            <img src={footerlogo} alt="logo" className='max-h-[60px]'/>
            {/* TravelLogo */}
          </h1>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum non voluptate eum illo facere obcaecati deleniti sequi ratione fuga doloribus sed, voluptas aperiam accusantium.
          </p>
          <br/>
          <div className='flex items-center gap-3 mt-3'>
            <FaLocationArrow/>
            <p>Kerala, India</p>
          </div>
          <div className='flex items-center gap-3 mt-3'>
            <FaMobileAlt/>
            <p>+91-9876543210</p>
          </div>
          {/* social handlers */}
          <div>
            <div className='flex items-center gap-3 mt-6'>
              <a href="#">
                <FaInstagram className='text-3xl'/>
              </a>
              <a href="#">
                <FaFacebook className='text-3xl'/>
              </a>
              <a href="#">
                <FaLinkedin className='text-3xl'/>
              </a>
            </div>
          </div>
        </div>
          {/* links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            {/* first col links */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                        FooterLinks.map(({title , link , id}) => (
                          <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                            <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                             <span>&#11162;</span>
                             <span key={id}>{title}</span>
                            </Link>
                          </li>
                        ))
                  }
                </ul>
              </div>
            </div>
            {/* second col links */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                        FooterLinks.map(({title , link , id}) => (
                          <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                            <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                             <span>&#11162;</span>
                             <span key={id}>{title}</span>
                            </Link>
                          </li>
                        ))
                  }
                </ul>
              </div>
            </div>
            {/* third col links */}
            <div>
              <div className='py-8 px-4'>
                <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                        FooterLinks.map(({title , link, id}) => (
                          <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-700'>
                            <Link to={link} onClick={() => window.scrollTo(0, 0)}>
                             <span>&#11162;</span>
                             <span key={id}>{title}</span>
                            </Link>
                          </li>
                        ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer copyright section */}
        <div>
          <div className='text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white'>
            @copyright 2024 All rights reserved || Made with ❤️ by <a href="https://github.com/mohdshuhaib" target="_blank" rel="noreferrer">Shuhaib</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer