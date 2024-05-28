import ReviewCarousel from "./ReviewCarousel"
import ReviewCarouselMB from "./ReviewCarouselMB"

const Testimonials = () => {
  return (
    <>
    <div className="py-20">
            <h2 className="font-bold text-center text-5xl p-20 drop-shadow-2xl">Customers said about <span className="text-orange-600 font-bold text-5xl tracking-widest">ORANGE</span></h2>
    </div>
        <div className="hidden lg:block">
        <ReviewCarousel />
        </div>
        <div className='lg:hidden'>
          <ReviewCarouselMB />
        </div>
        
    </>
  )
}

export default Testimonials