"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const timelineEvents = [
  { year: 2010, title: "Company Founded", description: "TechCo was established with a vision to revolutionize software development." },
  { year: 2013, title: "First Major Project", description: "Successfully delivered a large-scale e-commerce platform for a Fortune 500 company." },
  { year: 2016, title: "International Expansion", description: "Opened our first international office in London, expanding our global reach." },
  { year: 2019, title: "AI Division Launch", description: "Launched our dedicated AI and Machine Learning division to meet growing demand." },
  { year: 2022, title: "100th Employee Milestone", description: "Celebrated hiring our 100th employee, marking a significant growth milestone." },
]

export default function JourneyTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
          <div className="flex justify-between mb-8">
            {timelineEvents.map((event) => (
              <button
                key={event.year}
                className={`relative z-10 w-8 h-8 rounded-full ${
                  selectedEvent.year === event.year ? "bg-indigo-600" : "bg-white border-2 border-indigo-600"
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                <span className="absolute top-10 left-1/2 transform -translate-x-1/2 text-sm font-semibold">
                  {event.year}
                </span>
              </button>
            ))}
          </div>
          <motion.div
            key={selectedEvent.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md mt-12"
          >
            <h3 className="text-xl font-semibold mb-2">{selectedEvent.title}</h3>
            <p className="text-gray-600">{selectedEvent.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

