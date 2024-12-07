import { Button } from "@/components/ui/button"

export default function ClientPortalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Portal</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Access your project information, track progress, and share resources securely.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-8">Please log in to access the client portal.</p>
          <Button>Log In</Button>
        </div>
      </section>
    </div>
  )
}

