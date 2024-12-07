'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Smartphone, Zap } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Write maintainable and scalable code that follows best practices and industry standards.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Create websites that look great on all devices, from mobile phones to large desktop screens.'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Build lightning-fast applications with optimized performance for the best user experience.'
  }
]

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              {hoveredIndex === index && (
                <motion.div
                  className="mt-4 h-1 bg-indigo-600"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

