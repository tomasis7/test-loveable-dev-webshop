
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { useProducts } from '@/contexts/ProductContext';

const Index = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter(product => product.featured);
  const regularProducts = products.filter(product => !product.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Modern interior"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="layout-grid relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Refined spaces for modern living
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Curated products designed with precision and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button variant="primary" size="lg">
                    Explore Products
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button variant="outline" size="lg">
                    Admin Panel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="py-24 bg-background relative">
          <div className="layout-grid">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our selection of premium designs to enhance your space.
              </p>
            </div>
            
            {featuredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    featured={product.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-accent/5 rounded-lg border border-border">
                <p className="text-muted-foreground">
                  No featured products yet. Add some in the admin panel!
                </p>
                <Link to="/admin" className="inline-block mt-4">
                  <Button variant="secondary" size="sm">
                    Go to Admin
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
        
        {/* All Products Section */}
        <section className="py-24 bg-accent/5">
          <div className="layout-grid">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">All Products</h2>
              <p className="text-muted-foreground max-w-2xl">
                Browse our complete collection of thoughtfully designed products.
              </p>
            </div>
            
            {regularProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {regularProducts.map(product => (
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
            ) : (
              <div className="text-center py-12 bg-background rounded-lg border border-border">
                <p className="text-muted-foreground">
                  No products available yet. Add some in the admin panel!
                </p>
                <Link to="/admin" className="inline-block mt-4">
                  <Button variant="secondary" size="sm">
                    Go to Admin
                  </Button>
                </Link>
              </div>
            )}
            
            <div className="mt-12 text-center">
              <Link to="/products">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary/10">
          <div className="layout-grid">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Manage your content through our CMS
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Add, edit, and remove products easily with our built-in content management system.
              </p>
              <Link to="/admin">
                <Button variant="primary" size="lg">
                  Access Admin Panel
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
