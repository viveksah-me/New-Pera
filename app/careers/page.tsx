import JobOpenings from "@/components/careers/JobOpenings"
import CompanyBenefits from "@/components/careers/CompanyBenefits"
import ApplicationForm from "@/components/careers/ApplicationForm"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore exciting career opportunities at Pera Infotech and be part of our innovative team.
          </p>
        </div>
      </section>
      <JobOpenings />
      <CompanyBenefits />
      
      <ApplicationForm />
    </div>
  )
}

