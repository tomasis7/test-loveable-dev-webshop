
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  className?: string;
  featured?: boolean;
}

const ProductCard = ({ id, name, price, image, category, className, featured = false }: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "group relative animate-fade-in opacity-0 h-full",
        featured ? "col-span-2 row-span-2" : "",
        className
      )}
      style={{ 
        animationDelay: `${(id % 10) * 100}ms` 
      }}
    >
      <Link to={`/product/${id}`} className="block h-full">
        <div className="flex flex-col h-full overflow-hidden rounded-lg hover-lift">
          <div className="product-image-container relative flex-1">
            <img 
              src={image} 
              alt={name} 
              className="product-image" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300"></div>
            {featured && (
              <div className="absolute top-4 left-4">
                <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
            )}
          </div>
          
          <div className="p-4 space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-foreground line-clamp-1">{name}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{category}</p>
            <p className="font-medium">${price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
