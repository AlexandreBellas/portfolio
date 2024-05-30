import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alexandre Batistella | Portfolio',
  description: 'Get to know better Alexandre Batistella',
  keywords: [
    'portfolio',
    'nextjs',
    'alebatistella',
    'github',
    'fullstack',
    'software',
    'engineer',
    'react',
    'reactjs',
    'node',
    'nodejs',
  ],
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👤</text></svg>",
  openGraph: {
    title: 'Alexandre Batistella | Portfolio',
    description: 'Get to know better Alexandre Batistella',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
