import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EL Style ES | Krawiectwo na miarę',
  description: 'Ręcznie szyte z pasją i perfekcją. Odkryj elegancję rękodzieła i krawiectwa na miarę dla nowoczesnych kobiet i mężczyzn.',
  generator: 'v0.app',
  keywords: ['krawiectwo', 'szycie na miarę', 'przeróbki', 'garnitury', 'suknie', 'EL Style ES'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'EL Style ES | Krawiectwo na miarę',
    description: 'Ręcznie szyte z pasją i perfekcją. Odkryj elegancję rękodzieła i krawiectwa na miarę.',
    type: 'website',
    locale: 'pl_PL',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${lato.variable} ${greatVibes.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
