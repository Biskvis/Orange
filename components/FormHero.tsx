'use client'
import React from 'react'
import { motion } from 'framer-motion';


const FormHero = () => {
  return (
    <section className="hero py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Get a Quote
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-white"
        >
          Fill out this form and our representatives will contact you shortly.
        </motion.p>
      </div>
    </section>
  )
}

export default FormHero