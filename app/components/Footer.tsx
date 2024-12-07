import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-2xl font-bold">YN</span>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="#features" className="hover:text-indigo-400 transition duration-300">
              Features
            </Link>
            <Link href="#projects" className="hover:text-indigo-400 transition duration-300">
              Projects
            </Link>
            <Link href="#pricing" className="hover:text-indigo-400 transition duration-300">
              Pricing
            </Link>
            <Link href="#contact" className="hover:text-indigo-400 transition duration-300">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

