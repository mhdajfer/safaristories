"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-4">
              <Mail className="text-amber-600" />
              <span>info@safaristories.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-amber-600" />
              <span>+91-9020587172</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-amber-600" />
              <span>
                Thathapilly, Mannam P.O, North Paravur, Ernakulam, Kerala
              </span>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-600"
            ></textarea>
            <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
