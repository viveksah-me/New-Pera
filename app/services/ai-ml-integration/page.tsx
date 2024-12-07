import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AIMLIntegrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">AI/ML Integration</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Integrate cutting-edge AI and machine learning into your products. We help you leverage intelligent technologies to gain a competitive edge.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">AI/ML Capabilities</h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>Predictive analytics</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Computer Vision</li>
            <li>Recommendation systems</li>
            <li>AI-powered chatbots and virtual assistants</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Integrate AI/ML in Your Business</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

