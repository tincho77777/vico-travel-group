import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinos from "@/components/Destinos";
import ComoTrabajamos from "@/components/ComoTrabajamos";
import FormCotizacion from "@/components/FormCotizacion";
import Testimonios from "@/components/Testimonios";
import Nosotros from "@/components/Nosotros";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinos />
      <ComoTrabajamos />
      <FormCotizacion />
      <Testimonios />
      <Nosotros />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
