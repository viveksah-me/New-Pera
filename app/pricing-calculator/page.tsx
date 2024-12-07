"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PricingCalculatorPage() {
  const [hours, setHours] = useState(0)
  const [rate, setRate] = useState(100)

  const totalCost = hours * rate

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Calculator</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estimate the cost of your project with our interactive pricing calculator.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-md">
          <div className="space-y-4">
            <div>
              <Label htmlFor="hours">Estimated Hours</Label>
              <Input
                id="hours"
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="rate">Hourly Rate ($)</Label>
              <Input
                id="rate"
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </div>
            <div className="text-2xl font-bold">
              Estimated Cost: ${totalCost.toFixed(2)}
            </div>
            <Button>Request a Quote</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

