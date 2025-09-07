
export default function Process() {
  const steps = [
    { n: 1, t: "Cotiza", d: "Envíanos origen, destino, volumen/peso y tipo de carga." },
    { n: 2, t: "Retiro", d: "Coordinamos retiro en 24–48h según ciudad." },
    { n: 3, t: "Traslado", d: "Seguimiento y confirmaciones en ruta." },
    { n: 4, t: "Entrega", d: "Comprobante de entrega y feedback." },
  ]
  return (
    <section id="proceso" className="bg-gray-50">
      <div className="container py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Cómo trabajamos</h2>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.n} className="p-6 bg-white border rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold">{s.n}</div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="text-gray-600 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
