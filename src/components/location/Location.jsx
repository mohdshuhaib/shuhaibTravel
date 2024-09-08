import React from 'react'

const Location = () => {
  return (
    <div>
      <div>
        <div className='container pb-10'>
          <h1 className='inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl'>
          Location to visit
          </h1>
          <div className='rounded-xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.8590333599554!2d76.00853821023799!3d10.898316089213168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b6c3f92f0ab7%3A0xdbdb6a710269341b!2sPMSA%20PTM%20ORPHANAGE%20KATTILANGADI!5e0!3m2!1sen!2sin!4v1725821171820!5m2!1sen!2sin" frameBorder="0" width='100%' height='360' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{ borderRadius: '20px'}}>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location