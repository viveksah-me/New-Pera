import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CloudSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Cloud Solutions</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Leverage the power of cloud computing for your business. We help you migrate, optimize, and manage your applications and infrastructure in the cloud.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Cloud Services</h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>Cloud migration strategies</li>
            <li>Infrastructure as Code (IaC)</li>
            <li>Serverless architecture</li>
            <li>Multi-cloud and hybrid cloud solutions</li>
            <li>Cloud security and compliance</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Explore Cloud Solutions</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

