'use client'

import Card from "@/components/Card";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const ImageCarousel = () => {

    const images = [
        "/fedex.png",
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/0.png",
        "/6.png",
        "/7.png",
      ];
      const FAST_DURATION = 25;
      const SLOW_DURATION = 75;
    
      const [duration, setDuration] = useState(FAST_DURATION);
      let [ref, { width }] = useMeasure();
    
      const xTranslation = useMotionValue(0);
    
      const [mustFinish, setMustFinish] = useState(false);
      const [rerender, setRerender] = useState(false);
    
      useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;
    
        if (mustFinish) {
          controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
            ease: "linear",
            duration: duration * (1 - xTranslation.get() / finalPosition),
            onComplete: () => {
              setMustFinish(false);
              setRerender(!rerender);
            },
          });
        } else {
          controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: duration,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          });
        }
    
        return controls?.stop;
      }, [rerender, xTranslation, duration, width]);
    
      return (
        <main className="p-20 pb-60">
          <h2 className="text-center text-5xl font-bold drop-shadow-2xl">Our Trusted Partners</h2>
          <motion.div
            className="absolute left-0 flex gap-4 overflow-x-auto "
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images].map((item, idx) => (
              <Card image={`${item}`} key={idx} />
            ))}
          </motion.div>
        </main>
      );
    }

export default ImageCarousel