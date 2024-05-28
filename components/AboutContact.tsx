import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const AboutContact = () => {
  return (
    <section className="cta-section py-12 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="mb-6">
            Ready to experience the Orange Express difference? Contact us today to learn more about our services and how we can help you.
          </p>
          <Button asChild className="bg-white text-orange-500 px-4 py-2 rounded shadow-lg hover:bg-gray-100 transition">
            <Link href='/contact-us'>Contact Us</Link>
          </Button>
        </div>
      </section>
  )
}

export default AboutContact