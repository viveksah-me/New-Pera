import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated with the Latest Tech Trends</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Dive into our collection of insightful articles, tutorials, and industry analyses to keep your finger on the pulse of the ever-evolving tech landscape.
        </p>
        <Button asChild size="lg">
          <Link href="#blog-posts">Explore All Posts</Link>
        </Button>
      </div>
    </section>
  )
}

