"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Working with this team was an absolute pleasure. They delivered a high-quality product on time and within budget.",
    author: "John Doe",
    company: "Tech Co.",
  },
  {
    quote: "The attention to detail and creative solutions provided exceeded our expectations.",
    author: "Jane Smith",
    company: "Design Studio",
  },
  {
    quote: "Our project's success is largely due to the expertise and dedication of this talented team.",
    author: "Mike Johnson",
    company: "Startup Inc.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-xl italic mb-4">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
            <p className="font-semibold">{testimonials[currentIndex].author}</p>
            <p className="text-gray-600">{testimonials[currentIndex].company}</p>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

