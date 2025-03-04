
import React, { useState } from 'react';
import { useProducts, Product } from '@/contexts/ProductContext';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface ProductEditorProps {
  existingProduct?: Product;
  onComplete?: () => void;
}

const ProductEditor: React.FC<ProductEditorProps> = ({ 
  existingProduct, 
  onComplete 
}) => {
  const { toast } = useToast();
  const { addProduct, updateProduct } = useProducts();
  
  const [product, setProduct] = useState<Omit<Product, 'id'> & { id?: number }>({
    id: existingProduct?.id,
    name: existingProduct?.name || '',
    price: existingProduct?.price || 0,
    image: existingProduct?.image || '',
    category: existingProduct?.category || '',
    description: existingProduct?.description || '',
    featured: existingProduct?.featured || false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' ? parseFloat(value) : value
    });
  };

  const handleFeaturedChange = (checked: boolean) => {
    setProduct({
      ...product,
      featured: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!product.name || !product.image || !product.category) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    try {
      if (existingProduct) {
        updateProduct({ ...product, id: existingProduct.id } as Product);
        toast({
          title: "Success",
          description: "Product updated successfully",
        });
      } else {
        addProduct(product);
        toast({
          title: "Success",
          description: "Product added successfully",
        });
        // Reset form after adding
        setProduct({
          name: '',
          price: 0,
          image: '',
          category: '',
          description: '',
          featured: false
        });
      }
      
      if (onComplete) onComplete();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save product",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="price">Price ($)</Label>
        <Input
          id="price"
          name="price"
          type="number"
          min="0.01"
          step="0.01"
          value={product.price}
          onChange={handleChange}
          placeholder="0.00"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="e.g. Furniture, Lighting, etc."
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter product description"
          rows={3}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch
          id="featured"
          checked={product.featured}
          onCheckedChange={handleFeaturedChange}
        />
        <Label htmlFor="featured">Featured Product</Label>
      </div>
      
      <Button type="submit" className="w-full">
        {existingProduct ? 'Update Product' : 'Add Product'}
      </Button>
    </form>
  );
};

export default ProductEditor;
