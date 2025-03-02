
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="layout-grid flex items-center justify-between">
        <Link 
          to="/" 
          className="text-foreground font-medium text-xl tracking-tight transition-opacity hover:opacity-80"
        >
          ESSENCE
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link text-foreground hover:text-accent transition-colors duration-200">
            Home
          </Link>
          <Link to="/products" className="nav-link text-foreground hover:text-accent transition-colors duration-200">
            Products
          </Link>
          <Link to="/about" className="nav-link text-foreground hover:text-accent transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="nav-link text-foreground hover:text-accent transition-colors duration-200">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link 
            to="/cart" 
            className="p-2 rounded-full text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full text-foreground hover:bg-secondary transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col justify-center transition-all duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          <Link 
            to="/" 
            className="text-foreground text-2xl font-medium hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="text-foreground text-2xl font-medium hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="text-foreground text-2xl font-medium hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground text-2xl font-medium hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
