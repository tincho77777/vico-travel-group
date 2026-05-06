// Configuración global del sitio.
// Datos reales tomados del perfil oficial de Instagram @vico.travelgroup

export const SITE = {
  brand: "VICO Travel Group",
  shortBrand: "VICO Travel",
  tagline: "Mejoramos cualquier cotización",
  city: "Luján de Cuyo, Mendoza",
  address: "Edificio Alvear, Luján de Cuyo (solo con cita previa)",
  legajo: "Legajo 19904",
  // TODO: reemplazar por el número real de WhatsApp de la agencia
  whatsappNumber: "5492610000000",
  whatsappDisplay: "+54 9 261 000-0000",
  email: "hola@vicotravelgroup.com",
  instagram: "https://www.instagram.com/vico.travelgroup/",
  instagramHandle: "@vico.travelgroup",
  linktree: "https://linktr.ee/vicotravelgroup",
  defaultMessage:
    "¡Hola VICO Travel! Quiero cotizar un viaje y recibir asesoramiento personalizado."
};

export function buildWhatsappLink(message) {
  const text = encodeURIComponent(message || SITE.defaultMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
