"use client";
import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would normally submit the form data to a server
    console.log("Form submitted:", formData);
    alert(
      "Thanks for your message! This is a demo form - in a real site this would be sent to Anna."
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-soft-white to-light-blush/30"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Let's Work Together and Achieve Your Goals!
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Ready to take the next step? Whether you're interested in personal
            training or group sessions, I'm here to help you succeed.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-light-blush/50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-bold-pink" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+1 250-803-4627</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-light-blush/50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-bold-pink" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">anna@annanovafitness.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-light-blush/30 rounded-lg">
                <p className="font-semibold mb-2">Training Location</p>
                <p>Anna Nova Fitness Studio</p>
                <p>117 Hudson Ave NE, Salmon Arm, BC V1E 4N5, Canada</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-pink"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-pink"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-pink"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bold-pink"
                  required
                ></textarea>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-5 w-5 text-bold-pink focus:ring-bold-pink border-gray-300 rounded"
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 text-sm text-gray-600"
                  >
                    I consent to having this website store my submitted
                    information so they can respond to my inquiry.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full bg-bold-pink text-white font-semibold py-3 px-6 rounded-lg hover:bg-bold-pink/90 transition-colors"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
