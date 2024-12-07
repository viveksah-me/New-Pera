import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="text-gray-600 mb-4">
          We're here to help! If you have any questions or need assistance, please don't hesitate to reach out using the information below.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">info@techco.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="w-6 h-6 text-indigo-600 mr-3 mt-1" />
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Connect With Us</h3>
        <div className="flex space-x-4">
          {/* Add your social media icons/links here */}
        </div>
      </div>
    </div>
  )
}

