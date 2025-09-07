
"use client"
import { useState } from "react"

type FormState = "idle" | "sending" | "sent" | "error"

export default function QuoteForm() {
  const [state, setState] = useState<FormState>("idle")
  const [msg, setMsg] = useState<string>("")

  const isStatic = process.env.NEXT_PUBLIC_STATIC_DEPLOY === "true"

  if (isStatic) {
    // Versión solo para feedback
    return (
      <section id="cotizar" className="container py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Solicitar cotización</h2>
        <p className="text-gray-700 mt-2 max-w-2xl">
          Esta demo en GitHub Pages es estática. Escríbenos directo por WhatsApp o correo y te cotizamos al tiro.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || ""}?text=Hola%20quiero%20cotizar%20un%20transporte`}
             className="px-6 py-3 rounded-xl bg-brand text-white font-medium hover:bg-brand-dark transition">
            WhatsApp
          </a>
          <a href="mailto:ventas@tu-dominio.cl?subject=Cotizaci%C3%B3n%20transporte&body=Hola,%20quiero%20cotizar%20un%20env%C3%ADo..."
             className="px-6 py-3 rounded-xl border font-medium hover:bg-gray-50 transition">
            Enviar correo
          </a>
        </div>
      </section>
    )
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState("sending")
    setMsg("")
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Error al enviar")
      setState("sent")
      setMsg("¡Listo! Te contactaremos en breve.")
      form.reset()
    } catch (err: any) {
      setState("error")
      setMsg(err.message || "No se pudo enviar. Intenta nuevamente.")
    }
  }

  return (
    <section id="cotizar" className="container py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Solicitar cotización</h2>
      <p className="text-gray-700 mt-2 max-w-2xl">Responde en menos de 1 minuto. Mientras más detalle des, más precisa será la tarifa.</p>

      <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <label className="text-sm font-medium">Nombre</label>
          <input name="nombre" required className="border rounded-xl px-3 py-2" placeholder="Tu nombre" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Email</label>
          <input name="email" type="email" required className="border rounded-xl px-3 py-2" placeholder="correo@empresa.cl" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Teléfono</label>
          <input name="telefono" required className="border rounded-xl px-3 py-2" placeholder="+56 9 ..." />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Empresa (opcional)</label>
          <input name="empresa" className="border rounded-xl px-3 py-2" placeholder="Tu empresa" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Origen</label>
          <input name="origen" required className="border rounded-xl px-3 py-2" placeholder="Santiago, bodega X" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Destino</label>
          <input name="destino" required className="border rounded-xl px-3 py-2" placeholder="Temuco, sucursal Y" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Fecha estimada</label>
          <input name="fecha" type="date" className="border rounded-xl px-3 py-2" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Tipo de carga</label>
          <select name="tipo" className="border rounded-xl px-3 py-2">
            <option value="consolidada">Consolidada (LTL)</option>
            <option value="camion-completo">Camión completo (FTL)</option>
            <option value="refrigerada">Refrigerada</option>
            <option value="otra">Otra</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Volumen (m³)</label>
          <input name="volumen" type="number" step="0.01" className="border rounded-xl px-3 py-2" placeholder="Ej: 12" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium">Peso (kg)</label>
          <input name="peso" type="number" step="1" className="border rounded-xl px-3 py-2" placeholder="Ej: 800" />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <label className="text-sm font-medium">Mensaje (opcional)</label>
          <textarea name="mensaje" rows={4} className="border rounded-xl px-3 py-2" placeholder="Detalles, accesos, horarios, etc." />
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button disabled={state==="sending"} className="px-6 py-3 rounded-xl bg-brand text-white font-medium hover:bg-brand-dark transition disabled:opacity-50">
            {state === "sending" ? "Enviando..." : "Enviar cotización"}
          </button>
          {msg && <span className={"text-sm " + (state==="error" ? "text-red-600" : "text-green-700")}>{msg}</span>}
        </div>
      </form>
    </section>
  )
}
