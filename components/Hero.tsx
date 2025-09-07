
"use client"
import Link from "next/link"
import Image from "next/image"


export default function Hero() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP
  const waLink = whatsapp
    ? `https://wa.me/${whatsapp}?text=Hola%20quiero%20cotizar%20un%20transporte`
    : "#"

  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 md:py-28">
        {/* layout en dos columnas desde md */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Columna texto */}
          <div className="max-w-3xl">
            <span className="inline-block mb-3 text-brand font-semibold">
              Arica → Punta Arenas
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Transporte de <span className="text-brand">carga consolidada</span> y camión completo en todo Chile
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Retiros en 24–48h (según ciudad), seguimiento y red de camiones propia y asociada. Pagas por lo que ocupas, sin rodeos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#cotizar"
                className="px-6 py-3 rounded-xl bg-brand text-white font-medium hover:bg-brand-dark transition"
              >
                Solicitar cotización
              </Link>
              <a
                href={waLink}
                className="px-6 py-3 rounded-xl border font-medium hover:bg-gray-50 transition"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          {/* Columna imagen */}
          <div className="relative">
            <Image
              src="/camion.jpg"  // <-- sube esta imagen a /public
              alt="Camión de carga en ruta — Transportes Latorre"
              width={1200}
              height={800}
              className="rounded-2xl border shadow-sm"
              priority
              sizes="(min-width: 768px) 48vw, 100vw"
            />
          </div>
        </div>
      </div>

      {/* blobs decorativos */}
      <div className="absolute -right-24 -top-24 w-[420px] h-[420px] bg-brand/10 rounded-full blur-3xl" />
      <div className="absolute -left-24 bottom-0 w-[420px] h-[420px] bg-brand/10 rounded-full blur-3xl" />
    </section>
  )
}
