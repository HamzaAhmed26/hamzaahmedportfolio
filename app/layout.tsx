import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hamza Ahmed - Portfolio',
  description: 'Full-stack developer and creative technologist showcasing innovative projects and solutions.',
  keywords: ['developer', 'portfolio', 'react', 'nextjs', 'typescript', 'fullstack'],
  authors: [{ name: 'Hamza Ahmed' }],
  creator: 'Hamza Ahmed',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hamzaahmed.dev',
    title: 'Hamza Ahmed - Portfolio',
    description: 'Full-stack developer and creative technologist showcasing innovative projects and solutions.',
    siteName: 'Hamza Ahmed Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Ahmed - Portfolio',
    description: 'Full-stack developer and creative technologist showcasing innovative projects and solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
} 