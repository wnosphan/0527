import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { bodySerif } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Lục Tuyết Kỳ',
  description: 'Blog đồng bộ từ WordPress về Lục Tuyết Kỳ và Tru Tiên',
  keywords: ['blog', 'wordpress', 'nextjs', 'tru tien', 'lục tuyết kỳ'],
  authors: [{ name: 'Lục Tuyết Kỳ' }],
  creator: 'Lục Tuyết Kỳ',
  publisher: 'Lục Tuyết Kỳ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://luctuyetkytuyetme.wordpress.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${bodySerif.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
