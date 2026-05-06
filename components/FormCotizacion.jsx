"use client";

import { useState } from "react";
import { buildWhatsappLink } from "@/lib/config";

const initial = {
  nombre: "",
  destino: "",
  fechaIda: "",
  fechaVuelta: "",
  presupuesto: "",
  moneda: "USD",
  personas: ""
};

const formatFecha = (iso) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};

export default function FormCotizacion() {
  const [data, setData] = useState(initial);
  const [sent, setSent] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const formatNumber = (value) => {
    const onlyNums = value.replace(/\D/g, "");
    if (!onlyNums) return "";
    return new Intl.NumberFormat("es-AR").format(Number(onlyNums));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "presupuesto") {
      setData((d) => ({ ...d, presupuesto: formatNumber(value) }));
      return;
    }
    setData((d) => ({ ...d, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fechas =
      data.fechaIda && data.fechaVuelta
        ? `${formatFecha(data.fechaIda)} al ${formatFecha(data.fechaVuelta)}`
        : formatFecha(data.fechaIda) || formatFecha(data.fechaVuelta);
    const msg =
      `¡Hola VICO Travel! Quiero cotizar un viaje:\n` +
      `• Nombre: ${data.nombre}\n` +
      `• Destino: ${data.destino}\n` +
      `• Fechas: ${fechas}\n` +
      `• Presupuesto estimado: ${data.presupuesto} ${data.moneda}\n` +
      `• Cantidad de personas: ${data.personas}`;
    window.open(buildWhatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="cotizar" className="section bg-gradient-to-b from-cream-50 to-cream-100">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Cotización</p>
          <h2 className="section-title mt-3">Contanos sobre tu viaje ideal</h2>
          <p className="section-sub">
            Completá el formulario y te contactamos por WhatsApp con una propuesta
            a medida en menos de 24 hs. <strong>Mejoramos cualquier cotización.</strong>
          </p>

          <ul className="mt-8 space-y-3 text-brand-900/80">
            {[
              "Asesoramiento sin costo",
              "Cuotas y formas de pago flexibles",
              "Atención personalizada antes, durante y después"
            ].map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-900 text-cream-50">
                  ✓
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-brand-900/10 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="label" htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                value={data.nombre}
                onChange={onChange}
                required
                placeholder="Tu nombre"
                className="input"
              />
            </div>
            <div>
              <label className="label" htmlFor="destino">Destino</label>
              <input
                id="destino"
                name="destino"
                value={data.destino}
                onChange={onChange}
                required
                placeholder="Ej: Brasil, Caribe…"
                className="input"
              />
            </div>
            <div>
              <label className="label" htmlFor="fechaIda">Fecha de ida</label>
              <input
                id="fechaIda"
                name="fechaIda"
                type="date"
                min={today}
                value={data.fechaIda}
                onChange={onChange}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label" htmlFor="fechaVuelta">Fecha de vuelta</label>
              <input
                id="fechaVuelta"
                name="fechaVuelta"
                type="date"
                min={data.fechaIda || today}
                value={data.fechaVuelta}
                onChange={onChange}
                required
                className="input"
              />
            </div>
            <div>
              <label className="label" htmlFor="presupuesto">Presupuesto estimado</label>
              <div className="flex gap-2">
                <input
                  id="presupuesto"
                  name="presupuesto"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={data.presupuesto}
                  onChange={onChange}
                  required
                  placeholder="Ej: 1500"
                  className="input flex-1"
                />
                <select
                  id="moneda"
                  name="moneda"
                  value={data.moneda}
                  onChange={onChange}
                  className="input w-28"
                  aria-label="Moneda"
                >
                  <option value="USD">USD</option>
                  <option value="ARS">ARS</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label" htmlFor="personas">Cantidad de personas</label>
              <input
                id="personas"
                name="personas"
                type="number"
                min="1"
                value={data.personas}
                onChange={onChange}
                required
                placeholder="2"
                className="input"
              />
            </div>
          </div>

          <button type="submit" className="btn-primary mt-6 w-full text-base">
            Enviar y cotizar
          </button>

          {sent && (
            <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              ¡Listo! Te redirigimos a WhatsApp para finalizar la consulta.
            </p>
          )}

          <p className="mt-4 text-center text-xs text-brand-900/55">
            Al enviar serás redirigido a WhatsApp con tu consulta lista.
          </p>
        </form>
      </div>
    </section>
  );
}
