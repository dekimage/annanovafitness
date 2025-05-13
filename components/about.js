import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-soft-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5 w-full relative">
            <div className="relative h-[500px] md:h-[450px] w-full rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="/h2.png"
                alt="Anna Nova - Personal Fitness Coach"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-[85%] right-0 transform translate-x-1/2 -translate-y-1/2 bg-bold-pink h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shadow-lg">
              <span className="font-kanit font-bold text-white text-center text-xs md:text-base leading-tight">
                Certified Coach
              </span>
            </div>
          </div>

          <div className="md:w-3/5">
            <h2 className="section-title">
              Hi, I'm Anna Nova — Your Personal Fitness Coach
            </h2>
            <p className="text-lg mb-6">
              With over 8 years of experience in CrossFit, strength training,
              and weight loss coaching, I help women achieve real, lasting
              results. Whether you're just starting out or ready to level up
              your fitness game, I'm here to guide you every step of the way.
            </p>
            <p className="text-lg mb-6">
              My approach combines effective training methods with personalized
              nutrition guidance and ongoing support. I believe fitness should
              be empowering, sustainable, and tailored to your unique body and
              goals.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-light-blush/50 p-4 rounded-lg text-center">
                <p className="font-kanit font-bold text-3xl text-bold-pink">
                  200+
                </p>
                <p className="text-deep-purple-gray">Happy Clients</p>
              </div>
              <div className="bg-light-blush/50 p-4 rounded-lg text-center">
                <p className="font-kanit font-bold text-3xl text-bold-pink">
                  8+
                </p>
                <p className="text-deep-purple-gray">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
