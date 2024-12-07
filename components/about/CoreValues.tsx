import { Lightbulb, Target, Users } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in technology.",
  },
  {
    icon: Target,
    title: "Quality",
    description: "We are committed to delivering excellence in every project we undertake.",
  },
  {
    icon: Users,
    title: "Customer-Centricity",
    description: "Our clients' success is at the heart of everything we do.",
  },
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-lg shadow-md text-center">
              <value.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

