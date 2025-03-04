
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductEditor from '@/components/cms/ProductEditor';
import ProductList from '@/components/cms/ProductList';

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple authentication for demo purposes
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would verify against a secure backend
    if (password === 'admin123') {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "You are now logged in as admin",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-8 space-y-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-border">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Admin Access</h1>
            <p className="mt-2 text-muted-foreground">Enter your password to access the CMS</p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-background border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
              <p className="mt-1 text-sm text-muted-foreground">
                Hint: For demo purposes, use "admin123"
              </p>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">CMS Admin Panel</h1>
          <div className="flex space-x-4">
            <Button onClick={() => navigate('/')} variant="outline">
              View Site
            </Button>
            <Button onClick={() => setIsAuthenticated(false)} variant="secondary">
              Logout
            </Button>
          </div>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 space-y-4">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
                  <ProductEditor />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border">
                  <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
                  <ProductList />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="mt-6">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-border">
              <h2 className="text-xl font-semibold mb-4">CMS Settings</h2>
              <p className="text-muted-foreground">
                Configuration options will appear here in future updates.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
