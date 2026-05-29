import './globals.css'

export const metadata = {
  title: 'San Sanatana Tamil',
  description: 'Aplikasi Spiritual Hindu Tamil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ta">
      <body>{children}</body>
    </html>
  )
}
