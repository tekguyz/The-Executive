import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero id="hero" />
        <Services id="services" />
        <About id="about" />
        <Testimonials id="reviews" />
        <ContactForm id="contact" />
        <FAQ id="faq" />
      </main>
      <Footer />
      <MobileStickyBar />
      <FloatingCTA />
    </>
  );
}
