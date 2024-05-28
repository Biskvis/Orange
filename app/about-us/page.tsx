import React from 'react'
import AboutHero from '@/components/AboutHero'
import AboutStory from '@/components/AboutStory'
import AboutTeam from '@/components/AboutTeam'
import AboutValues from '@/components/AboutValues'
import AboutContact from '@/components/AboutContact'

const page = () => {
  return (
    <>
    <AboutHero />
    <AboutStory />
    <AboutValues />
    <AboutTeam />
    <AboutContact />
    </>
  )
}

export default page