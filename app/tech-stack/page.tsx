import TechStackGrid from "@/components/tech-stack/TechStackGrid"
import DevelopmentProcess from "@/components/tech-stack/DevelopmentProcess"

export default function TechStackPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Tech Stack & Process</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the cutting-edge technologies we use and our streamlined development process that ensures efficient, high-quality results for every project.
          </p>
        </div>
      </section>
      <TechStackGrid />
      <DevelopmentProcess />
    </div>
  )
}

