'use client'
import React from 'react'
import { motion } from 'framer-motion';


const AboutHero = () => {
  return (
    <section className="hero py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Our story and mission
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-white"
        >
          Learn more about who we are, our values, and our commitment to excellence.
        </motion.p>
      </div>
    </section>
  )
}

export default AboutHero