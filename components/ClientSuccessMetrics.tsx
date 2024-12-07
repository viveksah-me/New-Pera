import { Users, Briefcase, Code, Award } from 'lucide-react'

const metrics = [
  { label: "Successful Projects", value: "200+", icon: Briefcase },
  { label: "Happy Clients", value: "100+", icon: Users },
  { label: "Lines of Code", value: "1M+", icon: Code },
  { label: "Awards Won", value: "50+", icon: Award },
]

export default function ClientSuccessMetrics() {
  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center">
              <metric.icon className="w-12 h-12 mb-4" />
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-xl">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

