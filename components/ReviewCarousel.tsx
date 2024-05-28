'use client'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import ReviewCard from "./ReviewCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import reviews from '@/app/reviews'  

const ReviewCarousel = () => {
    
    const display = reviews.map((item, idx) => 
        <ReviewCard key={idx} info={item} />
    )
  
    const displayMobile = reviews.map((item, idx) =>
      <CarouselItem key={idx}>
        <ReviewCard info={item} />
      </CarouselItem>
    )
    
  return (
    <Carousel
        plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true
            }),
          ]}
      >
    <CarouselContent className="hidden md:flex">
    <CarouselItem className="flex flex-col justify-center items-center"> 
        <div className="flex p-4">
            {display.slice(0, 4)}
        </div>
        <div className="flex p-8 pl-20">
            {display.slice(4, 8)}
           
        </div>
    </CarouselItem>
    <CarouselItem className="flex flex-col justify-center items-center"> 
        <div className="flex p-4">
        {display.slice(8, 12)}
        </div>
    <div className="flex p-8 pl-20">
        {display.slice(12, 16)}

    </div>
    </CarouselItem>
    <CarouselItem className="flex flex-col justify-center items-center"> 
        <div className="flex p-4">
        {display.slice(16, 20)}

        </div>
        <div className="flex p-8 pl-20">
        {display.slice(20, 24)}

        </div>
    </CarouselItem>
    </CarouselContent>
    </Carousel>
  )
}

export default ReviewCarousel