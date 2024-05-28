'use client'
import React from 'react'
import { motion } from 'framer-motion';

const AboutValues = () => {
  return (
    <>
        <section className="about-values py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 p-4">Our Values</h2>
          <div className="flex flex-wrap justify-center space-x-4">
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }} 
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.1}}
  className="max-w-xs bg-white p-4 shadow-lg mb-4 drop-shadow-2xl"
>
  <h3 className="text-2xl font-semibold mb-2 p-2">Integrity</h3>
  <p className='tracking-wide text-xl'>
    We uphold the highest standards of integrity in all of our actions. Honesty and transparency are at the core of our business practices, ensuring that we consistently do the right thing for our clients, partners, and employees. 
  </p>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }} 
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.1}}
  className="max-w-xs bg-white p-4 shadow-lg mb-4 "
>
  <h3 className="text-2xl font-semibold mb-2 p-2">Customer Commitment</h3>
  <p className='tracking-wide text-xl'>
    We develop relationships that make a positive difference in our customers&apos; lives. Our focus is on understanding and meeting the unique needs of each customer, ensuring personalized service and satisfaction. 
  </p>
</motion.div>
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }} 
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.1}}
  className="max-w-xs bg-white p-4 shadow-lg mb-4"
>
  <h3 className="text-2xl font-semibold mb-2 p-2">Quality</h3>
  <p className='tracking-wide text-xl'>
    We provide outstanding services that deliver premium value to our customers. Our commitment to quality means that we invest in the best technology, processes, and people to ensure exceptional performance in every aspect of our operations. 
  </p>
</motion.div>

          </div>
        </div>
        </section>

    </>
  )
}

export default AboutValues