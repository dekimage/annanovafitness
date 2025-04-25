import Link from "next/link"
import { Check } from "lucide-react"

export default function Packages() {
  const packages = [
    {
      name: "1-on-1 Personal Training",
      price: "$700/month",
      description: "Customized workout plan, weekly check-ins, unlimited Q&A support via phone/email",
      features: [
        "Personalized training program",
        "Weekly progress tracking",
        "Nutrition guidance",
        "24/7 support via WhatsApp",
        "Video analysis of form",
      ],
      highlight: true,
    },
    {
      name: "Group Training (3x/Week)",
      price: "$250/month",
      description: "Small group CrossFit-inspired workouts, motivation & accountability",
      features: [
        "3 sessions per week",
        "Small group (max 6 people)",
        "Varied workout routines",
        "Community support",
        "Monthly progress check-in",
      ],
      highlight: false,
    },
    {
      name: "Group Training (5x/Week)",
      price: "$400/month",
      description: "Intensive small group training, priority access, additional support",
      features: [
        "5 sessions per week",
        "Small group (max 6 people)",
        "Varied workout routines",
        "Priority booking",
        "Bi-weekly progress check-in",
      ],
      highlight: false,
    },
  ]

  return (
    <section id="packages" className="section-padding bg-gradient-to-b from-soft-white to-light-blush/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Choose Your Training Package</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Select the package that fits your goals and lifestyle. All programs include personalized attention and
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`card hover:scale-105 ${pkg.highlight ? "border-2 border-bold-pink relative" : ""}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-bold-pink text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-kanit font-bold text-bold-pink mb-4">{pkg.price}</p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="mb-8 space-y-2">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-lime-yellow mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-bold-pink text-white hover:bg-bold-pink/90"
                    : "bg-lime-yellow text-deep-purple-gray hover:bg-lime-yellow/90"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#contact" className="btn-primary">
            Contact Me to Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}
