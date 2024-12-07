import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Building Scalable Software, Transforming Your Vision with Pera Infotech
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Delivering custom solutions to fuel your business growth. Pera Infotech is your trusted partner in innovative software development.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/portfolio">See Our Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96">
              {/* Replace with your own illustration or animation */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">Your Illustration Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75"></div>
    </section>
  )
}

