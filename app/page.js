import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Packages from "@/components/packages"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Packages />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}
