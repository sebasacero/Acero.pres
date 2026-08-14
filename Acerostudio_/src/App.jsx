import { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import Navbar from './components/Navbar.jsx';
import NavDrawer from './components/NavDrawer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import CafeHero from './components/CafeHero.jsx';
import ProductSection from './components/ProductSection.jsx';
import Marquee from './components/Marquee.jsx';
import ColdBrewHero from './components/ColdBrewHero.jsx';
import WacBanner from './components/WacBanner.jsx';
import RecipeArchive from './components/RecipeArchive.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  return (
    <CartProvider>
      <header className="hero-container">
        <Navbar navOpen={navOpen} onOpenNavDrawer={() => setNavOpen(true)} />
        <CafeHero />
      </header>

      <NavDrawer isOpen={navOpen} onClose={() => setNavOpen(false)} />

      <ProductSection />

      <Marquee />

      <ColdBrewHero />

      <Marquee />

      <WacBanner />

      <RecipeArchive />

      <Marquee />

      <Footer />

      <CartDrawer />
      <WhatsAppButton />
    </CartProvider>
  );
}
