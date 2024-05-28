'use client'
import React from 'react'

const AboutStory = () => {
  return (
    <>
    <div className='grid md:grid-cols-2 p-12 about-story '>
        <section className=" md:p-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">How we got here</h2>
              <p className="mb-6 tracking-wide text-xl">
              <span className="text-orange-600 font-bold text-2xl tracking-widest">ORANGE</span> Express was founded in 2020 with a simple mission: to provide reliable and efficient delivery services. Over the years, we&apos;ve grown into a leading logistics company, helping businesses and individuals transport goods with ease and confidence.
              </p>
            </div>

          </section>
          <section className=" md:p-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 md:mt-48 mt-16">What we aim for</h2>
              <p className="mb-6 tracking-wide text-xl">
                Our mission is to deliver excellence in all that we do. We strive to provide top-notch logistics solutions that meet the unique needs of our clients, ensuring timely and secure delivery of goods, every time.
              </p>
            </div>
        </section>
    </div>
    </>
  )
}

export default AboutStory