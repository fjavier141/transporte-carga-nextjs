
export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold">Transportes Latorre</h3>
          <p className="text-gray-600">Carga consolidada (LTL) y camión completo (FTL) a nivel nacional.</p>
        </div>
        <div>
          <h3 className="font-semibold">Contacto</h3>
          <p className="text-gray-600">Email: ventas@tu-dominio.cl</p>
          <p className="text-gray-600">Teléfono: +56 9 1234 5678</p>
          <p className="text-gray-600">Santiago, Chile</p>
        </div>
        <div>
          <h3 className="font-semibold">Legal</h3>
          <p className="text-gray-600">© {new Date().getFullYear()} Transportes Latorre. Todos los derechos reservados.</p>
          <p className="text-gray-500">RUT 00.000.000-0 (ejemplo)</p>
        </div>
      </div>
    </footer>
  )
}
