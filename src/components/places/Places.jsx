import React from 'react'
import PlacesCard from './PlacesCard'
import img1 from '../../assets/kodaikanal.jpg'
import img2 from '../../assets/munnar.jpg'
import Img3 from '../../assets/ooty.jpg'
import img4 from '../../assets/ponmudi.jpeg'
import img5 from '../../assets/vagamon.jpg'
import img6 from '../../assets/nilambur.jpg'

const PlacesData = [
  {
    image: img1,
    title: 'Kodaikanal',
    location: 'Kochi, Kerala, India',
    description: 'Kodaikanal is a beautiful place to visit. It is a small town in the state of Kerala, India. Kodaikanal is known for its scenic beauty, rich culture, and delicious cuisine. The town is famous for its traditional Kerala style of houses, called "Kodaikanal style houses." These houses are known for their unique architecture and design, which reflect the rich cultural heritage of Kerala.',
    price: 1250,
    type: 'vibe with cave'
  },
  {
    image: img2,
    title: 'Munnar',
    location: 'Kochi, Kerala, India',
    description: 'Munnar is a beautiful place to visit. It is a small town in the state of Kerala, India. Munnar is known for its scenic beauty, rich culture, and delicious cuisine. The town is famous for its traditional Kerala style of houses, called "Munnar style houses." These houses are known for their unique architecture and design, which reflect the rich cultural heritage of Kerala.',
    price: 5000,
    type: 'hotel'
  },
  {
    image: Img3,
    title: 'Ooty',
    location: 'Kochi, Kerala, India',
    description: 'Ooty is a beautiful place to visit. It is a small town in the state of Kerala, India. Ooty is known for its scenic beauty, rich culture, and delicious cuisine. The town is famous for its traditional Kerala style of houses, called "Ooty style houses." These houses are known for their unique architecture and design, which reflect the rich cultural heritage of Kerala.',
    price: 3000,
    type: 'tourist'
  },
  {
    image: img4,
    title: 'Ponmudi',
    location: 'Kochi, Kerala, India',
    description: 'Ponmudi is a luxurious hotel located in Kochi, Kerala, India. It offers a wide range of amenities and services, including a spa, fitness center, and a rooftop pool. The hotel is known for its stunning views of the Arabian Sea and the city of Kochi.',
    price: 2000,
    type: 'fog with pool'
  },
  {
    image: img5,
    title: 'vagamon',
    location: 'Kochi, Kerala, India',
    description: 'Vagamon is a beautiful place to visit. It is a small town in the state of Kerala, India. Vagamon is known for its scenic beauty, rich culture, and delicious cuisine. The town is famous for its traditional Kerala style of houses, called "Vagamon style houses." These houses are known for their unique architecture and design, which reflect the rich cultural heritage of Kerala.',
    price: 1400,
    type: 'mountain'
  },
  {
    image: img6,
    title: 'Nilambur',
    location: 'Kochi, Kerala, India',
    description: 'Nilambur is a beautiful place to visit. It is a small town in the state of Kerala, India. Nilambur is known for its scenic beauty, rich culture, and delicious cuisine. The town is famous for its traditional Kerala style of houses, called "Nilambur style houses." These houses are known for their unique architecture and design, which reflect the rich cultural heritage of Kerala.',
    price: 1500,
    type: 'natural'
  }
]

const Places = ({ handleOrderPopup }) => {
  return (
    <div className='bg-gray-50 py-10'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
        Best Places to visit
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {
            PlacesData.map((item , index) => (
              <PlacesCard key={index} {...item} handleOrderPopup={handleOrderPopup}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Places