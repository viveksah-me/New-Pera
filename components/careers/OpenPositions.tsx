"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const positions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    description: "We're seeking an experienced Full Stack Developer to join our team and help build scalable, high-performance web applications.",
    requirements: [
      "5+ years of experience in full stack development",
      "Proficiency in React, Node.js, and SQL/NoSQL databases",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong problem-solving skills and attention to detail"
    ],
    id: "senior-full-stack-developer"
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA",
    description: "We're looking for a talented UX/UI Designer to create intuitive and visually appealing user interfaces for our products.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools such as Figma or Sketch",
      "Strong portfolio demonstrating user-centered design process",
      "Excellent communication and collaboration skills"
    ],
    id: "ux-ui-designer"
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote",
    description: "We're seeking a DevOps Engineer to help streamline our development and deployment processes and maintain our cloud infrastructure.",
    requirements: [
      "3+ years of experience in DevOps or Site Reliability Engineering",
      "Strong knowledge of cloud platforms and containerization technologies",
      "Experience with CI/CD pipelines and infrastructure as code",
      "Familiarity with monitoring and logging tools"
    ],
    id: "devops-engineer"
  }
]

export default function OpenPositions() {
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <Accordion type="single" collapsible className="w-full">
          {positions.map((position) => (
            <AccordionItem value={position.id} key={position.id}>
              <AccordionTrigger>
                <div className="flex justify-between items-center w-full">
                  <span className="font-semibold">{position.title}</span>
                  <span className="text-sm text-gray-500">{position.location}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-gray-600">{position.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild>
                    <a href={`mailto:careers@techco.com?subject=Application for ${position.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

