import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ReviewCard from "./ReviewCard"
import reviews from '@/app/reviews'  


export default function ReviewCarouselMB() {

    const display = [];

    for (let i = 0; i < reviews.length; i += 3) {
        display.push(
            <CarouselItem key={i} className="flex flex-col gap-4">
                <ReviewCard info={reviews[i]} />
                {i + 1 < reviews.length && <ReviewCard info={reviews[i + 1]} />}
                {i + 2 < reviews.length && <ReviewCard info={reviews[i + 2]} />}
            </CarouselItem>
        );
    }

  return (
    <Carousel className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {display}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
