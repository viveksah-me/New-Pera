import { Search, FileText, Code, TestTube, Rocket } from 'lucide-react'

const steps = [
  { icon: Search, title: "Discovery", description: "We start by understanding your business needs and project requirements." },
  { icon: FileText, title: "Planning", description: "We create a detailed project plan and define the architecture and tech stack." },
  { icon: Code, title: "Development", description: "Our team begins coding, following best practices and agile methodologies." },
  { icon: TestTube, title: "Testing", description: "Rigorous testing ensures the quality and reliability of the software." },
  { icon: Rocket, title: "Deployment", description: "We deploy the solution and provide ongoing support and maintenance." }
]

export default function DevelopmentProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex items-center">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 ${index % 2 === 0 ? 'ml-6 md:ml-0 md:mr-6' : 'mr-6 md:mr-0 md:ml-6'}`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex-grow ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

