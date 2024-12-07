import { Zap, Globe, Book, Coffee, Users, Heart } from 'lucide-react'

const perks = [
  {
    icon: Zap,
    title: "Cutting-edge Technology",
    description: "Work with the latest technologies and tools to solve complex challenges."
  },
  {
    icon: Globe,
    title: "Remote-friendly",
    description: "Enjoy the flexibility of working remotely or from our modern offices."
  },
  {
    icon: Book,
    title: "Continuous Learning",
    description: "Access to online courses, conferences, and workshops to enhance your skills."
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible hours and generous time off to help you recharge and stay productive."
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work alongside talented individuals in a supportive and inclusive workplace."
  },
  {
    icon: Heart,
    title: "Comprehensive Benefits",
    description: "Enjoy competitive salary, health insurance, and retirement plans."
  }
]

export default function PerksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk) => (
            <div key={perk.title} className="bg-white p-6 rounded-lg shadow-md">
              <perk.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{perk.title}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

