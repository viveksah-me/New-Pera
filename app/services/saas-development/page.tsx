import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SaaSDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">SaaS Development</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Build scalable and efficient Software-as-a-Service solutions. We help you create cloud-based applications that can serve multiple clients and grow with your business.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>Multi-tenancy architecture</li>
            <li>Scalable cloud infrastructure</li>
            <li>Subscription management</li>
            <li>API integrations</li>
            <li>Analytics and reporting</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Develop Your SaaS Solution</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

