import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-purple-gray text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="/logo.png"
                  alt="Anna Nova Fitness Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-kanit font-semibold text-xl text-white">
                Anna Nova Fitness
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Anna Nova Fitness — Strong. Confident. Empowered.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-lime-yellow" />
                <span>+1 250-803-4627</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-lime-yellow" />
                <span>anna@annanovafitness.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-kanit font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="hover:text-lime-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-lime-yellow transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#packages"
                  className="hover:text-lime-yellow transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-lime-yellow transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-lime-yellow transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-kanit font-semibold text-xl mb-4">
              Training Hours
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Anna Nova Fitness. All rights reserved.</p>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-silver-gray">
        <p className="text-xl mt-2">
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <a
            href="https://www.denowebstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sharp-orange transition-colors underline"
          >
            &copy;Deno Web Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
