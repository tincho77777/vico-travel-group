import "./globals.css";

export const metadata = {
  title: "VICO Travel Group | Viajes a medida al mejor precio",
  description:
    "Agencia de viajes en Mendoza. Asesoramiento personalizado para diseñar tu viaje ideal: Brasil, Caribe, Europa, Mendoza y más.",
  keywords: [
    "agencia de viajes",
    "Mendoza",
    "viajes a medida",
    "Brasil",
    "Caribe",
    "Europa",
    "VICO Travel"
  ],
  icons: {
    icon: "/logo-vico.jpg",
    shortcut: "/logo-vico.jpg",
    apple: "/logo-vico.jpg"
  },
  openGraph: {
    title: "VICO Travel Group",
    description: "Creamos viajes a medida al mejor precio.",
    type: "website",
    images: ["/logo-vico.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
