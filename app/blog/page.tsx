import BlogHero from "@/components/blog/BlogHero"
import BlogGrid from "@/components/blog/BlogGrid"
import BlogCategories from "@/components/blog/BlogCategories"
import BlogSearch from "@/components/blog/BlogSearch"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <BlogHero />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <BlogCategories />
            <BlogSearch />
          </div>
          <BlogGrid />
        </div>
      </section>
    </div>
  )
}

