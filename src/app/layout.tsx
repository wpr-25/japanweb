import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JapanWeb',
  description: 'Using Next Js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  )
}
