import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RetinaCare AI · Explainable Retinal Screening',
  description: 'Human-in-the-loop diabetic retinopathy screening for rural primary healthcare centres.',
  generator: 'RetinaCare AI',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1525',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
