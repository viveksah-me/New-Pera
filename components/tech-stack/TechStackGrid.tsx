import Image from "next/image"

const technologies = [
  { name: "React", icon: "/tech-icons/react.svg" },
  { name: "Node.js", icon: "/tech-icons/nodejs.svg" },
  { name: "Python", icon: "/tech-icons/python.svg" },
  { name: "TypeScript", icon: "/tech-icons/typescript.svg" },
  { name: "AWS", icon: "/tech-icons/aws.svg" },
  { name: "Docker", icon: "/tech-icons/docker.svg" },
  { name: "MongoDB", icon: "/tech-icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "/tech-icons/postgresql.svg" },
  { name: "GraphQL", icon: "/tech-icons/graphql.svg" },
  { name: "Kubernetes", icon: "/tech-icons/kubernetes.svg" },
  { name: "TensorFlow", icon: "/tech-icons/tensorflow.svg" },
  { name: "Flutter", icon: "/tech-icons/flutter.svg" }
]

export default function TechStackGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={48}
                  height={48}
                />
              </div>
              <span className="text-center font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

