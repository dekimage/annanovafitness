import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Julia",
      location: "Salmon Arm, BC",
      quote:
        "Anna helped me lose 15kg and feel confident in my body again. Her support is unmatched!",
      stars: 5,
    },
    {
      name: "Sarah",
      location: "Salmon Arm, BC",
      quote:
        "I've tried many trainers before, but Anna's approach is different. She focuses on sustainable results and making fitness enjoyable.",
      stars: 5,
    },
    {
      name: "Melissa",
      location: "Vancouver",
      quote:
        "The group sessions are amazing! Great energy, supportive community, and I've seen more progress in 3 months than I did in a year on my own.",
      stars: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-light-blush/20 to-soft-white"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What My Clients Are Saying</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Real stories from real women who transformed their bodies and lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:scale-105">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-lime-yellow fill-lime-yellow"
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-bold-pink text-white px-6 py-3 rounded-lg font-kanit font-bold">
            Join 200+ women who transformed their bodies with Anna Nova Fitness
          </div>
        </div>
      </div>
    </section>
  );
}
