import React from 'react'
import Image from 'next/image'

const AboutTeam = () => {
  return (
    <section className=" py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="mb-6 text-xl p-4">
            Our team of dedicated professionals is our greatest asset. With a commitment to excellence and a passion for service, we work together to deliver the best results for our clients.
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="max-w-xs bg-white p-4 shadow-lg mb-4">
              <Image src="/ceo.png" alt="Team Member" width={300} height={300} className="w-full h-48 object-cover rounded mb-4"/>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="max-w-xs bg-white p-4 shadow-lg mb-4">
              <Image src="/coo.png" alt="Team Member" width={300} height={300} className="w-full h-48 object-cover rounded mb-4"/>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p>COO</p>
            </div>
            <div className="max-w-xs bg-white p-4 shadow-lg mb-4">
              <Image src="/cto.png" alt="Team Member" width={300} height={300} className="w-full h-48 object-cover rounded mb-4"/>
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p>CTO</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutTeam