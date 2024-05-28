import Link from "next/link"
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer relative text-white mt-20 rounded-xl flex items-center p-6">
        <div>
            <div className="flex flex-col md:flex-row gap-4">
                <a href='https://github.com'>
            <FaGithub size={30} />
                </a>
            <a href="https://twitter.com">
                <FaXTwitter size={30} />
            </a>
            <a href="https://facebook.com">
                <FaFacebook size={30} />
            </a>
            </div>
        </div>
        <span className="text-xs absolute bottom-2 right-4">© 2024 <span className="tracking-widest text-orange-600">ORANGE</span> Express</span>
        <div className="ml-auto pl-8 md:pl-0">
        <Button asChild variant='link'>
                <Link href="/get-quote">Get a Quote</Link>
        </Button>
        <Button asChild variant='link'>
                <Link href="/about-us">About</Link>
        </Button>
        <Button asChild variant='link'>
                <Link href="/contact-us">Contact Us</Link>
        </Button>
        </div>
        <div className="">
        <Button asChild variant='ghost'>
                <Link href="/">Terms & Conditions</Link>
        </Button>
        <Button asChild variant='ghost'>
                <Link href="/">Privacy</Link>
        </Button>
        <Button asChild variant='ghost'>
                <Link href="/frequently-asked-questions">FAQ</Link>
        </Button>
        </div>
    </div>
  )
}

export default Footer