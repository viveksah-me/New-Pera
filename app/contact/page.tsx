import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import ScheduleCall from "@/components/contact/ScheduleCall"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a question or want to discuss a project? We're here to help. Reach out to us and let's start a conversation.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <div>
              <ContactInfo />
              <ScheduleCall />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

