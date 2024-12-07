export default function WhoWeArePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the story, mission, and vision behind Pera Infotech.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-8">
            Founded in [year], Pera Infotech has grown from a small startup to a leading software development company. Our journey has been driven by a passion for innovation and a commitment to excellence.
          </p>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="mb-8">
            To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation.
          </p>
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="mb-8">
            To be the global leader in delivering transformative software solutions that shape the future of industries worldwide.
          </p>
        </div>
      </section>
    </div>
  )
}

