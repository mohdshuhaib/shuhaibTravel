import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const TestimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere! Et molestias iste quae maiores, adipisci distinctio nostrum eligendi incidunt ab qui eum illum aut!',
    img: 'https://picsum.photos/101/101'
  },
  {
    id: 2,
    name: 'Jane Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere! Et molestias iste quae maiores, adipisci distinctio nostrum eligendi incidunt ab qui eum illum aut!',
    img: 'https://picsum.photos/102/102'
  },
  {
    id: 3,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere! Et molestias iste quae maiores, adipisci distinctio nostrum eligendi incidunt ab qui eum illum aut!',
    img: 'https://picsum.photos/103/103'
  },
]

const Testimonials = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }
  return (
    <div className='py-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
            Testimonial
          </p>
          <h1 className='text-3xl font-bold'>Testimonial</h1>
          <p className='text-xs text-gray-400'>
            {''}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere! Et molestias iste quae maiores, adipisci distinctio nostrum eligendi incidunt ab qui eum illum aut!
          </p>
        </div>
        {/* testimonial section */}
        <Slider {...settings}>
          {
            TestimonialsData.map(({id , name , text , img}) => {
              return (
                <div key={id} className='my-6'>
                  <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative'>
                    <img src={img} alt={name} className='rounded-full block mx-auto'/>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <p className='text-gray-500 text-sm'>{text}</p>
                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>
                    ,,
                    </p>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials