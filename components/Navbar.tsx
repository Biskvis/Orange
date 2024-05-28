'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Button } from './ui/button';
import { Separator } from "@/components/ui/separator"
import { Menu } from 'lucide-react';

  
export default function Navbar() {

    const pathname = usePathname()

    return (
        <>
        <nav className="p-2 flex justify-center items-center">
            <Link href='/'>
                <h1 className="text-orange-600 font-bold text-3xl tracking-widest ">ORANGE</h1>
            </Link>
            <div className='p-2 hidden md:block'>

                <Button asChild variant={pathname === '/get-quote' ? 'secondary' : 'ghost'}>
                    <Link href="/get-quote">Get a Quote</Link>
                </Button>
                <Button asChild variant={pathname === '/about-us' ? 'secondary' : 'ghost'}>
                <Link href="/about-us">About</Link>
                </Button>
                <Button asChild variant={pathname === '/contact-us' ? 'secondary' : 'ghost'}>
                <Link href="/contact-us">Contact Us</Link>
                </Button>
            </div>
            <NavigationMenu className="md:hidden">
                <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger><Menu size={32} /></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <Button asChild variant='ghost'>
                            <Link href="/get-quote">Get a Quote</Link>
                        </Button>
                        <Button asChild variant='ghost'>
                            <Link href="/about-us">About</Link>
                        </Button>
                        <Button asChild variant='ghost'>
                            <Link href="/contact-us">Contact Us</Link>
                        </Button>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
        <Separator />
        </>
    )
}