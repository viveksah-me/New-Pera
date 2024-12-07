'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Co.',
    quote: 'Working with this developer was an absolute pleasure. They delivered a high-quality product on time and within budget.'
  },
  {
    name: 'Jane Smith',
    company: 'Design Studio',
    quote: 'The attention to detail and creative solutions provided by this developer exceeded our expectations.'
  },
  {
    name: 'Mike Johnson',
    company: 'Startup Inc.',
    quote: 'Our project\'s success is largely due to the expertise and dedication of this talented developer.'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <p className="text-xl italic mb-4">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600">{testimonials[currentIndex].company}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-6 h-6 text-indigo-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

