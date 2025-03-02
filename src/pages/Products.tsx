
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Filter, Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Lighting' | 'Audio' | 'Kitchen' | 'Home Decor' | 'Office' | 'Electronics' | 'Stationery';
type SortOption = 'featured' | 'newest' | 'price-low' | 'price-high' | 'name';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    // Sort products
    switch (sortBy) {
      case 'newest':
        result = result.filter(p => p.newArrival).concat(result.filter(p => !p.newArrival));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result = result.filter(p => p.featured).concat(result.filter(p => !p.featured));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy, searchQuery]);

  const categories: Category[] = ['All', 'Lighting', 'Audio', 'Kitchen', 'Home Decor', 'Office', 'Electronics', 'Stationery'];

  const toggleFilters = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 layout-grid">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Products
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            Browse our collection of thoughtfully designed objects
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="pb-8 layout-grid">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center">
            <Button 
              variant="outline" 
              className="md:hidden mr-2 px-3" 
              onClick={toggleFilters}
              aria-expanded={filterOpen}
            >
              <Filter size={18} />
              <span className="ml-2">Filters</span>
              {filterOpen ? <ChevronUp className="ml-2" size={16} /> : <ChevronDown className="ml-2" size={16} />}
            </Button>
            
            <div className="relative flex-1 md:min-w-[300px]">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-secondary pl-10 pr-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="bg-secondary border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        
        {/* Category Filters */}
        <div className={cn(
          "transition-all duration-300 overflow-hidden mt-4",
          filterOpen || "md:block md:h-auto md:opacity-100",
          filterOpen ? "h-auto opacity-100" : "h-0 opacity-0"
        )}>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all duration-200",
                  selectedCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-8 layout-grid">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
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
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-muted-foreground mb-4">No products match your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setSortBy('featured');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
