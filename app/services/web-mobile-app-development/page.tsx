import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WebMobileAppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Web & Mobile App Development</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Create powerful web and mobile applications for your business. We deliver engaging and intuitive solutions for both web browsers and mobile devices.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <ul className="list-disc list-inside space-y-4 mb-8">
            <li>Responsive web applications</li>
            <li>Native iOS and Android apps</li>
            <li>Cross-platform mobile solutions</li>
            <li>Progressive Web Apps (PWAs)</li>
            <li>UI/UX design for web and mobile</li>
          </ul>
          <Button asChild>
            <Link href="/contact">Start Your Web or Mobile Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

