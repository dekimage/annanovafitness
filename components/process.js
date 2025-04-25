import { Dumbbell, Phone, ClipboardList } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: <Phone className="h-12 w-12 text-bold-pink" />,
      title: "Schedule Your Free Discovery Call",
      description: "We'll discuss your goals, experience, and any limitations to create the perfect plan for you.",
    },
    {
      icon: <ClipboardList className="h-12 w-12 text-bold-pink" />,
      title: "Get Your Personalized Plan",
      description: "Receive a custom workout and nutrition plan designed specifically for your body and goals.",
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-bold-pink" />,
      title: "Start Training and See Results",
      description: "Begin your fitness journey with expert guidance and watch your body transform.",
    },
  ]

  return (
    <section className="section-padding bg-soft-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A simple, effective process to help you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card hover:scale-105 text-center flex flex-col items-center">
              <div className="bg-light-blush/50 p-4 rounded-full mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 font-kanit font-bold text-2xl text-lime-yellow">Step {index + 1}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-light-blush/30 p-8 rounded-xl">
          <p className="text-xl">
            Every program is designed to fit your lifestyle and goals. No cookie-cutter plans — just real support and
            real results.
          </p>
        </div>
      </div>
    </section>
  )
}
