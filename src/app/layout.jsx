import '../styles/globals.css'

export const metadata = {
  title: 'Cat Facts',
  description: 'Hechos random sobre gatos con imagenes más randoms'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
