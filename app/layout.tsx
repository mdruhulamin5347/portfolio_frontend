import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md.Ruhul Amin',
  description: 'Created with Md.Ruhul Amin.dev',
  generator: 'Md.Ruhul Amin.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
