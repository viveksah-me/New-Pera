import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Server, Zap } from 'lucide-react'

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs.",
    icon: Code,
    href: "/services/custom-software-development",
  },
  {
    title: "Mobile App Development",
    description: "Engaging and intuitive mobile applications for iOS and Android.",
    icon: Smartphone,
    href: "/services/mobile-app-development",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your applications.",
    icon: Server,
    href: "/services/cloud-solutions",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions to automate and optimize your processes.",
    icon: Zap,
    href: "/services/ai-machine-learning",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button asChild variant="link">
                <Link href={service.href}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

