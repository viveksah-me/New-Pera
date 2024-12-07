import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'

const resources = [
  { title: "Software Development Best Practices", type: "Whitepaper" },
  { title: "Choosing the Right Tech Stack", type: "eBook" },
  { title: "Project Requirements Template", type: "Template" },
  // Add more resources as needed
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our free whitepapers, eBooks, and templates to help you make informed decisions about your software projects.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.type}</p>
                <Button>Download</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

