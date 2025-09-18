import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "CampusHelper AI - Your Campus Assistant",
  description:
    "AI-powered campus assistant for students - get help with schedules, events, faculty contacts, library information, cafeteria menus, directions, and more",
  generator: "v0.app",
  keywords: "campus assistant, AI chatbot, student help, university, college, academic support",
  authors: [{ name: "CampusHelper Team" }],
  creator: "CampusHelper AI",
  publisher: "CampusHelper AI",
  robots: "index, follow",
  openGraph: {
    title: "CampusHelper AI - Your Campus Assistant",
    description: "AI-powered campus assistant for students",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusHelper AI - Your Campus Assistant",
    description: "AI-powered campus assistant for students",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
