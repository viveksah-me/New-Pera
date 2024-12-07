import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    description: "Revamped the UX/UI and backend systems of a major e-commerce platform, resulting in a 40% increase in conversions.",
    image: "/placeholder.svg?height=400&width=600",
    industry: "E-commerce",
    service: "Web Development",
    link: "/portfolio/e-commerce-platform-redesign"
  },
  {
    title: "Healthcare Management System",
    description: "Developed a comprehensive healthcare management system, streamlining patient care and reducing administrative overhead by 30%.",
    image: "/placeholder.svg?height=400&width=600",
    industry: "Healthcare",
    service: "Custom Software",
    link: "/portfolio/healthcare-management-system"
  },
  {
    title: "AI-Powered Financial Advisor",
    description: "Created an AI-driven financial advisory application, providing personalized investment recommendations to over 100,000 users.",
    image: "/placeholder.svg?height=400&width=600",
    industry: "Finance",
    service: "AI & Machine Learning",
    link: "/portfolio/ai-powered-financial-advisor"
  },
  {
    title: "Mobile Learning Platform",
    description: "Designed and developed a mobile learning platform, increasing student engagement by 50% and improving learning outcomes.",
    image: "/placeholder.svg?height=400&width=600",
    industry: "Education",
    service: "Mobile Apps",
    link: "/portfolio/mobile-learning-platform"
  },
  {
    title: "IoT-Enabled Manufacturing Solution",
    description: "Implemented an IoT solution for a manufacturing plant, optimizing production efficiency and reducing downtime by 25%.",
    image: "/placeholder.svg?height=400&width=600",
    industry: "Manufacturing",
    service: "Custom Software",
    link: "/portfolio/iot-enabled-manufacturing-solution"
  },
  {
    title: "Cloud Migration for Enterprise",
    description: "Successfully migrated a large enterprise's infrastructure to the cloud, improving scalability and reducing operational costs by 35%.",
    image: "/placeholder.svg?height=400&width=600",
    industry: "Finance",
    service: "Cloud Solutions",
    link: "/portfolio/cloud-migration-for-enterprise"
  }
]

export default function CaseStudyGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={study.image}
                alt={study.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{study.industry}</span>
                  <span className="text-sm text-gray-500">{study.service}</span>
                </div>
                <Button asChild>
                  <Link href={study.link}>View Case Study</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

