'use client'

import { useState } from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import YearCountUp from "./YearCountUp";
import QuoteCalc from './QuoteCalc';
import { Separator } from "@/components/ui/separator"

export default function Hero() {

    const [ year, setYear ] = useState(2024)

    return (
        <>
        <div className="hero md:h-[30rem] rounded-xl flex justify-center items-center">
            <div className="flex flex-col md:flex-row p-4 w-[50rem]">
                <div className='p-4'>
                <h2 className="text-4xl font-semibold pb-4">Welcome to <span className='font-bold'>ORANGE</span> Express</h2>
                <p className="text-2xl leading-relaxed">Premier delivery service dedicated to providing swift, reliable, and personalized delivery solutions tailored to your needs.</p>
                </div>
                <QuoteCalc />
            </div>
        </div>
            <div className="grid place-content-center p-4">
                <div className="">
                <Button variant={year === 2022 ? undefined : 'outline'} className="text-xl" onClick={() => setYear(2022)}>2022</Button>
                <Button variant={year === 2023 ? undefined : 'outline'} className="text-xl" onClick={() => setYear(2023)}>2023</Button>
                <Button variant={year === 2024 ? undefined : 'outline'} className="text-xl" onClick={() => setYear(2024)}>2024</Button>
                </div>
            </div>
        <Separator />
        <YearCountUp year={year} />
        </>
    )
}