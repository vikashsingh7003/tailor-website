import type { Metadata } from 'next'
import { Barlow_Condensed, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-provider'
import { Agentation } from 'agentation'
import './globals.css'

const lamboType = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  variable: '--font-lambotype',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WIWI | Krawiectwo na miarę',
  description: 'Ręcznie szyte z pasją i perfekcją. Odkryj elegancję rękodzieła i krawiectwa na miarę dla nowoczesnych kobiet i mężczyzn.',
  generator: 'vikash-nextjs',
  keywords: ['krawiectwo', 'szycie na miarę', 'przeróbki', 'garnitury', 'suknie', 'WIWI'],
   icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },

      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },

      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],

    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],

    other: [
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
      {
        rel: 'msapplication-TileImage',
        url: '/ms-icon-144x144.png',
      },
    ],
  },

  openGraph: {
    title: 'WIWI | Krawiectwo na miarę',
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
    <html lang="pl" className={`${lamboType.variable} ${openSans.variable} bg-canvas-white`}>
      <body className="font-lambotype text-carbony-black antialiased overflow-x-hidden uppercase tracking-[0.023em]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'development' && <Agentation />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
