'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website with a custom CMS',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'A React-based task management application with real-time updates',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek and modern portfolio website for a photography client',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

