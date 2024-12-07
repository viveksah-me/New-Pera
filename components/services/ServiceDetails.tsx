"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Server, Zap, Globe, Cog } from 'lucide-react'

const services = [
  {
    title: "Custom Software Development",
    icon: Code,
    description: "Tailored solutions to meet your unique business needs. We design and develop custom software applications that streamline your operations and drive growth.",
    features: [
      "Requirement analysis and planning",
      "User-centric design",
      "Agile development methodology",
      "Quality assurance and testing",
      "Deployment and maintenance"
    ]
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description: "Engaging and intuitive mobile applications for iOS and Android. We create mobile apps that provide seamless user experiences and help you reach your audience on the go.",
    features: [
      "Native and cross-platform development",
      "UI/UX design for mobile",
      "Integration with device features",
      "App Store and Google Play submission",
      "Regular updates and maintenance"
    ]
  },
  {
    title: "Cloud Solutions",
    icon: Server,
    description: "Scalable and secure cloud infrastructure for your applications. We help you leverage the power of cloud computing to improve efficiency, reduce costs, and enhance flexibility.",
    features: [
      "Cloud migration strategies",
      "Infrastructure as Code (IaC)",
      "Serverless architecture",
      "Multi-cloud and hybrid cloud solutions",
      "Cloud security and compliance"
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Zap,
    description: "Intelligent solutions to automate and optimize your processes. We integrate cutting-edge AI and machine learning technologies to give your business a competitive edge.",
    features: [
      "Predictive analytics",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Recommendation systems",
      "AI-powered chatbots and virtual assistants"
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Responsive and dynamic web applications that engage your users. We create modern, fast, and scalable web solutions using the latest technologies and best practices.",
    features: [
      "Front-end development (React, Vue, Angular)",
      "Back-end development (Node.js, Python, Ruby)",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems (CMS)"
    ]
  },
  {
    title: "DevOps & Maintenance",
    icon: Cog,
    description: "Streamline your development process and maintain your software efficiently. We implement DevOps practices to improve collaboration, increase deployment frequency, and ensure reliable operations.",
    features: [
      "Continuous Integration and Continuous Deployment (CI/CD)",
      "Infrastructure automation",
      "Monitoring and logging",
      "Performance optimization",
      "24/7 support and maintenance"
    ]
  }
]

export default function ServiceDetails() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="sticky top-24">
              {services.map((service) => (
                <Button
                  key={service.title}
                  variant={activeService.title === service.title ? "default" : "ghost"}
                  className="w-full justify-start mb-2 text-left"
                  onClick={() => setActiveService(service)}
                >
                  <service.icon className="mr-2 h-5 w-5" />
                  {service.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">{activeService.title}</h2>
            <activeService.icon className="h-12 w-12 text-indigo-600 mb-4" />
            <p className="text-lg mb-6">{activeService.description}</p>
            <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {activeService.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button className="mt-8">Schedule a Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

