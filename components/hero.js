import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-light-blush/30 to-soft-white"
    >
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-purple-gray mb-6 leading-tight">
              Get Stronger, Leaner, and Healthier with Personal Coaching
            </h1>
            <p className="text-lg md:text-xl text-deep-purple-gray/80 mb-8">
              CrossFit-based weight loss and strength training programs tailored
              to your fitness journey. Personalized support and guaranteed
              results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary text-center">
                Start Your Transformation
              </Link>
              <Link href="#packages" className="btn-secondary text-center">
                View Packages
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/h1.png"
                alt="Anna Nova Fitness Training"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-lime-yellow h-24 w-24 rounded-full flex items-center justify-center shadow-lg">
              <span className="font-kanit font-bold text-deep-purple-gray text-center leading-tight">
                8+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
