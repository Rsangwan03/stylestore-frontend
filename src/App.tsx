import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Orders from './pages/Orders';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CurrencyProvider } from './context/CurrencyContext';
import BasketModal from './components/BasketModal';
import LoginModal from './components/LoginModal';
import ProfileModalWrapper from './components/ProfileModalWrapper';
import Footer from './components/Footer';

function Layout() {
  const { isLoginModalOpen, setIsLoginModalOpen } = useAuth();
  const [isBasketOpen, setIsBasketOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onBasketClick={() => setIsBasketOpen(true)} />

      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      {location.pathname === '/profile' && <ProfileModalWrapper />}
      <BasketModal isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <Footer />
    </div>
  );
}

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <CurrencyProvider>
            <AuthenticatedApp />
          </CurrencyProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
