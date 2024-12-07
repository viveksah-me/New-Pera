import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Hero from "@/components/Hero"
import ServicesOverview from "@/components/ServicesOverview"
import PortfolioHighlights from "@/components/PortfolioHighlights"
import Testimonials from "@/components/Testimonials"
import ClientLogos from "@/components/ClientLogos"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesOverview />
      <PortfolioHighlights />
      <Testimonials />
      <ClientLogos />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <Button asChild size="lg">
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

