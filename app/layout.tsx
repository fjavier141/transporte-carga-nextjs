
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Transportes Latorre — Carga consolidada en Chile",
  description: "Transporte de carga consolidada (LTL) y camión completo (FTL) de Arica a Punta Arenas. Retiros rápidos, seguridad y cobertura nacional.",
  openGraph: {
    title: "Transportes Latorre — Carga consolidada en Chile",
    description: "Transporte de carga consolidada (LTL) y FTL en todo Chile.",
    images: ["/og-image.png"],
    url: "https://example.com",
    siteName: "Transportes Latorre"
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportes Latorre — Carga consolidada en Chile",
    description: "Transporte de carga consolidada (LTL) y FTL en todo Chile.",
    images: ["/og-image.png"]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
