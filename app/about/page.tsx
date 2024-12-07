import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pera Infotech</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Learn about our mission, vision, and the team behind our innovative solutions.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="mb-4">
                Pera Infotech is a leading software development company dedicated to delivering innovative solutions that drive business growth and efficiency.
              </p>
              <Button asChild>
                <Link href="/about/who-we-are">Learn More About Us</Link>
              </Button>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="mb-4">
                Meet the brilliant minds behind our success. Our team of experts is passionate about creating cutting-edge software solutions.
              </p>
              <Button asChild>
                <Link href="/about/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add value items here */}
            <CoreValues />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Milestones</h2>
          {/* Add timeline or milestone component here */}
          <JourneyTimeline />
        </div>
      </section>
    </div>
  )
}

