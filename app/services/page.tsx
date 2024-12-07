import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Zap, Server, Cog } from 'lucide-react'

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs.",
    icon: Code,
    href: "/services/custom-software-development",
  },
  {
    title: "Web & Mobile App Development",
    description: "Create powerful web and mobile applications for your business.",
    icon: Smartphone,
    href: "/services/web-mobile-app-development",
  },
  {
    title: "SaaS Development",
    description: "Build scalable and efficient Software-as-a-Service solutions.",
    icon: Cloud,
    href: "/services/saas-development",
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for your business.",
    icon: Server,
    href: "/services/cloud-solutions",
  },
  {
    title: "AI/ML Integration",
    description: "Integrate cutting-edge AI and machine learning into your products.",
    icon: Zap,
    href: "/services/ai-ml-integration",
  },
  {
    title: "DevOps and Maintenance",
    description: "Streamline your development process and maintain your software efficiently.",
    icon: Cog,
    href: "/services/devops-and-maintenance",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our comprehensive range of software development services designed to help your business thrive in the digital age.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
                <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button asChild>
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

