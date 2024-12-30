"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_oci2x5l", // Replace with your EmailJS service ID
        "template_6o8w78e", // Replace with your EmailJS template ID
        {
          to_email: "justinjose5134@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "AmbEyK6bmN_vpzEZx" // Replace with your EmailJS public key
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      // Reset error message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-4">
              <Mail className="text-teal-600" />
              <span>safaristories@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-teal-600" />
              <span>+91-9020587172</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-teal-600" />
              <span>Thathapilly, Mannam P.O</span>
              <span>North Paravur, Ernakulam - 683520</span>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-600"
            ></textarea>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-teal-400"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
