import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Introduction() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We are your technology partner</h1>
          <p className="text-xl mb-8">
            At TechCo, we're passionate about leveraging cutting-edge technology to solve complex business challenges. Our team of expert developers, designers, and strategists work together to deliver innovative solutions that drive growth and efficiency for our clients.
          </p>
          <Button asChild size="lg">
            <Link href="/about/team">Meet Our Team</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  )
}

