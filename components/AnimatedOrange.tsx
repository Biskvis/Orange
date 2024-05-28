import Image from 'next/image';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedOrange = () => {
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
        "Over 1 million unique deliveries",
        "Over 15 million kilometers traveled",
        "Delivering happiness since 2020"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 25000); 

        return () => clearInterval(interval);
    });

    return (
        <motion.div
            animate={{
                scale: [1, 1, 1, 1, 1],
            }}
            transition={{
                duration: 20,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 5
            }}
        >
            <Image
                src='/orange.png'
                width={512}
                height={512}
                alt="orange"
                className="p-2 drop-shadow-2xl"
            />
            <motion.div
                key={textIndex} 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 5
                }}
                className="relative -top-52 left-20 md:left-26 text-xl text-orange-900"
            >
                <p className="font-semibold text-black text-sm md:text-xl">
                    {texts[textIndex]}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default AnimatedOrange;
