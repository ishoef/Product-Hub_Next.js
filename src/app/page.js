import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ProductShowcase from "./Components/ProductShowcase";

export default function Home() {
  return (
    <>
      <Navbar />

      <div>
        <Hero />
        <ProductShowcase />
      </div>
      <Footer />
    </>
  );
}