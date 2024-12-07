import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/logo.svg" alt="Pera Infotech Logo" width={40} height={40} />
              <span className="font-bold text-xl">Pera Infotech</span>
            </Link>
            <p className="text-gray-400">Building innovative software solutions for your business needs.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-indigo-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><LinkedIn /></a>
              <a href="#" className="hover:text-indigo-400 transition-colors"><Instagram /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-gray-800 text-white" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pera Infotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

