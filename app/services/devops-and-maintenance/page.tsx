import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DevOpsAndMaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">DevOps and Maintenance</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Streamline your development process and maintain your software efficiently. We implement DevOps practices to improve collaboration, increase deployment frequency, and ensure reliable operations.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our DevOps Services</h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>Continuous Integration and Continuous Deployment (CI/CD)</li>
            <li>Infrastructure automation</li>
            <li>Monitoring and logging</li>
            <li>Performance optimization</li>
            <li>24/7 support and maintenance</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Improve Your DevOps Practices</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

