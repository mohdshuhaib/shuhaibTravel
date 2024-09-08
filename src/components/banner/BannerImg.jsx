import React from 'react'

const BannerImg = ({img}) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '400px'
  }
  return (
    <div style={bgImage} data-aos='zoom-in' className='h-[400px] w-full'>

    </div>
  )
}

export default BannerImg