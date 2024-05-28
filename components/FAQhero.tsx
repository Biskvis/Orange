'use client'
import React from 'react'
import { motion } from 'framer-motion';


const FAQhero = () => {
  return (
    <section className="hero py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-white"
        >
         Learn more about all of our operations
        </motion.p>
      </div>
    </section>
  )
}

export default FAQhero