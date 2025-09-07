
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const required = ["nombre", "email", "telefono", "origen", "destino"]
    for (const k of required) {
      if (!body?.[k]) {
        return NextResponse.json({ error: `Falta ${k}` }, { status: 400 })
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    const text =
      `Nueva solicitud de cotización\n\n` +
      `Nombre: ${body.nombre}\n` +
      `Email: ${body.email}\n` +
      `Teléfono: ${body.telefono}\n` +
      `Empresa: ${body.empresa || "-"}\n` +
      `Origen: ${body.origen}\n` +
      `Destino: ${body.destino}\n` +
      `Fecha: ${body.fecha || "-"}\n` +
      `Tipo: ${body.tipo || "-"}\n` +
      `Volumen: ${body.volumen || "-"} m3\n` +
      `Peso: ${body.peso || "-"} kg\n` +
      `Mensaje: ${body.mensaje || "-"}\n`

    const info = await transporter.sendMail({
      from: `"Sitio Transportes" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "Nueva cotización — Transportes",
      text,
    })

    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: "No se pudo enviar" }, { status: 500 })
  }
}
