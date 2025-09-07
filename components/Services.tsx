
export default function Services() {
  const items = [
    {
      title: "Carga consolidada (LTL)",
      desc: "Optimiza costos pagando solo por el espacio que usas. Ideal para pallets y paquetes."
    },
    {
      title: "Camión completo (FTL)",
      desc: "Para volúmenes altos o envíos urgentes puerta a puerta, sin transbordos."
    },
    {
      title: "Cobertura nacional",
      desc: "Arica, Iquique, Antofagasta, Copiapó, La Serena, Valparaíso, RM, Talca, Chillán, Concepción, Temuco, Valdivia, Osorno, Puerto Montt, Coyhaique, Punta Arenas."
    },
    {
      title: "Seguridad y seguimiento",
      desc: "GPS, verificación de entrega, soporte por WhatsApp y correo."
    },
    {
      title: "Servicios empresariales",
      desc: "Contratos, facturación electrónica y SLA a medida."
    },
  ]

  return (
    <section id="servicios" className="container py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Servicios</h2>
      <p className="text-gray-700 mt-2 max-w-2xl">Soluciones flexibles para PyMEs y grandes empresas. Si no está en la lista, lo armamos.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 border rounded-2xl hover:shadow-sm transition">
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="text-gray-600 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
