
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Get featured and bestseller products
  const featuredProducts = products.filter(product => product.featured);
  const bestsellerProducts = products.filter(product => product.bestseller).slice(0, 4);
  const newArrivals = products.filter(product => product.newArrival).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 layout-grid">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-sm tracking-wider uppercase text-muted-foreground mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Modern Design Objects
          </span>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            Products that enhance your everyday life
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            Carefully curated and thoughtfully designed objects for modern living. 
            Our collection combines form and function to enhance your everyday experiences.
          </p>
          <div className="flex gap-4 animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
            <Link to="/products">
              <Button variant="primary" size="lg">
                Explore Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-grid">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Featured</span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Highlighted Products</h2>
            </div>
            <Link to="/products" className="group inline-flex items-center mt-4 md:mt-0 text-foreground hover:text-accent transition-colors">
              View all products 
              <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                category={product.category}
                featured={true}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Bestsellers Section */}
      <section className="py-20">
        <div className="layout-grid">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Popular</span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Bestsellers</h2>
            </div>
            <Link to="/products" className="group inline-flex items-center mt-4 md:mt-0 text-foreground hover:text-accent transition-colors">
              View all bestsellers 
              <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-grid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 animate-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-medium">Thoughtful Design</h3>
              <p className="text-muted-foreground">Every product is carefully considered to balance form and function, resulting in objects that are both beautiful and useful.</p>
            </div>
            <div className="space-y-4 animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-medium">Quality Materials</h3>
              <p className="text-muted-foreground">We select only the finest materials that age beautifully, ensuring our products become more meaningful with time and use.</p>
            </div>
            <div className="space-y-4 animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <h3 className="text-xl font-medium">Sustainable Practices</h3>
              <p className="text-muted-foreground">Our commitment to sustainability shapes everything from material sourcing to packaging, creating products with minimal environmental impact.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-20">
        <div className="layout-grid">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Just In</span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">New Arrivals</h2>
            </div>
            <Link to="/products" className="group inline-flex items-center mt-4 md:mt-0 text-foreground hover:text-accent transition-colors">
              View all new arrivals
              <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newArrivals.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="layout-grid flex flex-col items-center text-center">
          <span className="text-sm tracking-wider uppercase text-primary-foreground/70 mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Join Us
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-3xl mb-6 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            Subscribe to our newsletter
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            Be the first to know about new products, special offers, and design inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="primary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
