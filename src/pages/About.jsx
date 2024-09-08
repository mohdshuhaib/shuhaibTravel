import React from 'react'
import Location from '../components/location/Location'

const About = () => {
  return (
    <div className='container pt-14'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
        About us
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minima aut deleniti earum eligendi numquam quae minus? Rem minus quia totam quae aspernatur doloribus praesentium officiis! Aliquam molestias numquam voluptatem voluptates nesciunt qui provident, aperiam fuga nostrum exercitationem iure impedit excepturi voluptate dignissimos modi, neque temporibus earum quae reprehenderit, at delectus laborum enim. Accusantium facilis nostrum amet optio ut quaerat.
        </p>
        <br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro, numquam est harum laudantium minus fugit similique vero dolorum quaerat error perspiciatis illo ullam assumenda modi reiciendis iusto totam asperiores maiores fuga sit molestiae, hic aliquid veniam? Architecto, voluptatem? Perferendis.</p>
      </div>
      <Location/>
    </div>
  )
}

export default About