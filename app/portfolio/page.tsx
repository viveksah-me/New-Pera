import PortfolioFilter from "@/components/portfolio/PortfolioFilter"
import CaseStudyGrid from "@/components/portfolio/CaseStudyGrid"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our diverse range of successful projects and see how we've helped businesses across various industries achieve their goals.
          </p>
        </div>
      </section>
      <PortfolioFilter />
      <CaseStudyGrid />
    </div>
  )
}

