'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [hours, setHours] = useState(10)

  const calculatePrice = (hours: number) => {
    const baseRate = 100
    const discount = hours > 20 ? 0.1 : 0
    return hours * baseRate * (1 - discount)
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-6">Project Cost Calculator</h3>
          <div className="mb-6">
            <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-2">
              Estimated Project Hours
            </label>
            <input
              type="range"
              id="hours"
              min="1"
              max="100"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-center mt-2">{hours} hours</p>
          </div>
          <motion.div
            className="text-center text-3xl font-bold text-indigo-600 mb-6"
          >
            Estimated Cost: ${calculatePrice(hours).toLocaleString()}
          </motion.div>
          <p className="text-center text-gray-600">
            This is an estimate based on a rate of $100 per hour. Projects over 20 hours receive a 10% discount.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

