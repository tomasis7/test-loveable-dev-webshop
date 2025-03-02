
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="layout-grid">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-medium text-xl">ESSENCE</h3>
            <p className="text-muted-foreground max-w-xs">
              Curated products designed with precision and care for modern living.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/category/featured" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/category/new" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/category/bestsellers" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/faq" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link 
                  to="/returns" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ESSENCE. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
