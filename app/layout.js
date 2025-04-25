import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Anna Nova Fitness - Personal Training & CrossFit",
  description:
    "Get stronger, leaner, and healthier with personalized CrossFit-based weight loss and strength training programs.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
