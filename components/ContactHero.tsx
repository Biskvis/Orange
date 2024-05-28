'use client'
import React from 'react'
import { motion } from 'framer-motion';


const ContactHero = () => {
  return (
    <section className="hero py-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Contact us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-white"
        >
          Contact us about your questions and our representatives will get back to you as soon as possible.
        </motion.p>
      </div>
    </section>
  )
}

export default ContactHero