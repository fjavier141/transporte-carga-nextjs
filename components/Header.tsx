
"use client"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP
  const waLink = whatsapp ? `https://wa.me/${whatsapp}?text=Hola%20quiero%20cotizar%20un%20transporte` : "#"
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Transportes Latorre" width={140} height={40} />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#servicios" className="hover:text-brand">Servicios</Link>
          <Link href="#proceso" className="hover:text-brand">Cómo trabajamos</Link>
          <Link href="#cotizar" className="hover:text-brand">Cotizar</Link>
          <a href={waLink} className="px-4 py-2 rounded-xl bg-brand text-white hover:bg-brand-dark transition">WhatsApp</a>
        </nav>
      </div>
    </header>
  )
}
