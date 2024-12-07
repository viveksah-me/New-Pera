import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of AI in Software Development",
    snippet: "Explore how artificial intelligence is revolutionizing the software development industry and what it means for developers and businesses alike.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Artificial Intelligence",
    date: "2023-06-15",
    author: "Jane Smith",
    link: "/blog/future-of-ai-in-software-development"
  },
  {
    title: "5 Best Practices for Secure Cloud Computing",
    snippet: "Learn essential strategies to ensure your cloud infrastructure remains secure and resilient in the face of evolving cyber threats.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Cloud Computing",
    date: "2023-06-10",
    author: "John Doe",
    link: "/blog/best-practices-for-secure-cloud-computing"
  },
  {
    title: "The Rise of Progressive Web Apps",
    snippet: "Discover why progressive web apps are becoming increasingly popular among businesses and how they can enhance user engagement.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    date: "2023-06-05",
    author: "Alice Johnson",
    link: "/blog/rise-of-progressive-web-apps"
  },
  {
    title: "Optimizing Mobile App Performance",
    snippet: "Explore techniques and best practices for improving the speed and responsiveness of your mobile applications.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile Development",
    date: "2023-05-30",
    author: "Bob Williams",
    link: "/blog/optimizing-mobile-app-performance"
  },
  {
    title: "The Impact of 5G on IoT",
    snippet: "Analyze how the rollout of 5G networks is set to revolutionize the Internet of Things and create new opportunities for innovation.",
    image: "/placeholder.svg?height=400&width=600",
    category: "IoT",
    date: "2023-05-25",
    author: "Emma Davis",
    link: "/blog/impact-of-5g-on-iot"
  },
  {
    title: "Mastering DevOps: A Comprehensive Guide",
    snippet: "Dive into the world of DevOps and learn how to streamline your development process, improve collaboration, and accelerate delivery.",
    image: "/placeholder.svg?height=400&width=600",
    category: "DevOps",
    date: "2023-05-20",
    author: "Chris Anderson",
    link: "/blog/mastering-devops-comprehensive-guide"
  }
]

export default function BlogGrid() {
  return (
    <section id="blog-posts" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-indigo-600 font-semibold">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.snippet}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Button asChild variant="outline">
                    <Link href={post.link}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

