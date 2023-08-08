import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'



const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'meu portfolio lindinho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/img/minecraft-axolotl-bucket-512x512.png" />
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
