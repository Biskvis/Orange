'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion"
import AnimatedOrange from "./AnimatedOrange";

export default function Main() {
    return (
        <>
        <div className="about-values">
            
                <h2 className="font-bold text-center text-5xl p-20 drop-shadow-2xl">Why Choose <span className="text-orange-600 font-bold text-5xl tracking-widest">ORANGE</span> Express?</h2>
                <div className="flex flex-col md:flex-row md:w-[60rem] mx-auto pt-8">
                    <div className="md:w-1/2 text-xl md:pr-2">
                        <motion.p
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className=" p-8 rounded-xl hover:rounded-none text-black drop-shadow-2xl leading-relaxed">At <span className="text-orange-600 font-bold text-2xl tracking-widest">ORANGE</span> Express, we understand the importance of prompt delivery. Whether it&apos;s a last-minute gift, crucial documents, or daily essentials, our team is committed to delivering your items safely and on time, every time. With our state-of-the-art tracking system, you can monitor your package&apos;s journey from pick-up to drop-off, giving you peace of mind and full control.
                        </motion.p>
                        <AnimatedOrange />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className=" rounded-xl md:w-1/2 drop-shadow-2xl flex flex-col "
                        >
                    <Image src='/tree.gif' width={300} height={300} alt='orange tree' unoptimized className="flex self-center" />
                        <ul className="list-disc orange-list p-4 text-xl">
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className=""
                        >   
                            <li className="p-4 ">
                                <span className="font-bold">Speedy Delivery</span>: We prioritize efficiency without compromising on quality, ensuring your packages reach their destination swiftly.
                            </li>
                        </motion.div>
                            <motion.div
                            initial={{ opacity: 0, x:50 }}
                            whileInView={{ opacity: 1, x:0 }}
                            className=""
                        >
                            <li className="p-4">
                                <span className="font-bold">Reliability</span>: Trust in Orange Express to handle your deliveries with care and professionalism, guaranteeing a seamless experience from start to finish.
                            </li>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x:50 }}
                            whileInView={{ opacity: 1, x:0 }}
                        >
                            <li className="p-4">
                                <span className="font-bold">Personalized Service</span>: Our dedicated team is here to cater to your unique needs, offering customized solutions tailored to your preferences.
                            </li>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x:50 }}
                            whileInView={{ opacity: 1, x:0 }}
                        >
                          <li className="p-4">
                                <span className="font-bold">Nationwide Coverage</span>: Whether you&apos;re sending a package across the city or across the country, Orange Express has you covered with our extensive network of delivery partners.
                            </li>
                        </motion.div>
                        </ul>
                        <div className="flex self-center mt-auto p-8 items-center">
                            <Button asChild size='lg'  className="text-xl"><Link href='/get-quote'>Get a Quote now</Link></Button>
                            <Button asChild variant='link' className="text-lg text-black"><Link href='/about-us'>View more...</Link></Button>
                        </div>
                    </motion.div>
                </div>
        </div>
        </>
    );
}
