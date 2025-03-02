
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, ChevronRight, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { products } from '@/data/products';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(products.find(p => p.id === Number(id)));
  const [selectedImage, setSelectedImage] = useState(product?.image || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'specifications'>('details');
  const [loading, setLoading] = useState(true);
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);
  
  useEffect(() => {
    // Find the product based on ID
    const foundProduct = products.find(p => p.id === Number(id));
    setProduct(foundProduct);
    
    if (foundProduct) {
      setSelectedImage(foundProduct.image);
      setSelectedColor(foundProduct.colors[0]);
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-medium mb-4">Product not found</h1>
        <Link to="/products">
          <Button variant="outline">Return to Products</Button>
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="layout-grid pt-32 md:pt-40 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm text-muted-foreground mb-6 animate-fade-in opacity-0">
          <Link to="/products" className="hover:text-accent transition-colors flex items-center">
            <ChevronLeft size={16} className="mr-1" />
            Back to Products
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4 animate-fade-in opacity-0">
            <div className="product-image-container h-[500px] overflow-hidden rounded-lg bg-secondary/20">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "product-image-container flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all duration-300",
                    selectedImage === image ? "ring-2 ring-primary" : ""
                  )}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-medium mb-2">{product.name}</h1>
                <p className="text-xl font-medium mb-2">${product.price.toFixed(2)}</p>
                <p className="text-muted-foreground mb-6">{product.description}</p>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button 
                      key={index}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "w-10 h-10 rounded-full transition-all duration-200",
                        selectedColor === color ? "ring-2 ring-offset-2 ring-primary" : ""
                      )}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-border rounded-l-md bg-secondary"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 h-10 border-y border-border text-center focus:outline-none"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center border border-border rounded-r-md bg-secondary"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <Button 
                className="w-full mb-6 flex items-center justify-center py-6"
                size="lg"
              >
                <ShoppingBag className="mr-2" size={18} />
                Add to Cart
              </Button>
              
              {/* Details & Specifications */}
              <div className="border-t border-border pt-6">
                <div className="flex mb-4">
                  <button
                    onClick={() => setActiveTab('details')}
                    className={cn(
                      "mr-6 pb-2 transition-all",
                      activeTab === 'details' 
                        ? "border-b-2 border-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={cn(
                      "pb-2 transition-all",
                      activeTab === 'specifications' 
                        ? "border-b-2 border-primary font-medium" 
                        : "text-muted-foreground"
                    )}
                  >
                    Specifications
                  </button>
                </div>
                
                <div className={cn("transition-all duration-300 max-h-96 overflow-y-auto")}>
                  {activeTab === 'details' && (
                    <ul className="space-y-2 list-disc pl-5">
                      {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  
                  {activeTab === 'specifications' && (
                    <div className="space-y-3">
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <div key={index} className="grid grid-cols-2 gap-4">
                          <span className="text-muted-foreground">{key}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-medium">Related Products</h2>
            <Link to="/products" className="group inline-flex items-center text-foreground hover:text-accent transition-colors">
              View all products 
              <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
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
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
