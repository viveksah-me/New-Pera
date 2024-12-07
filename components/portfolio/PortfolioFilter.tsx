"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const industries = [
  "All Industries",
  "E-commerce",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing"
]

const serviceTypes = [
  "All Services",
  "Custom Software",
  "Mobile Apps",
  "Web Development",
  "Cloud Solutions",
  "AI & Machine Learning"
]

export default function PortfolioFilter() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [selectedService, setSelectedService] = useState("All Services")

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select Service Type" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline">Apply Filters</Button>
        </div>
      </div>
    </section>
  )
}

