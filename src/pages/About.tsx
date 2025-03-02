
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 layout-grid">
        <div className="max-w-3xl mx-auto text-center animate-fade-in opacity-0">
          <span className="text-sm tracking-wider uppercase text-accent mb-4 inline-block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Crafting products with purpose
          </h1>
          <p className="text-muted-foreground text-lg">
            At ESSENCE, we believe in creating products that enhance everyday life through 
            thoughtful design, quality materials, and sustainable practices.
          </p>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in opacity-0 order-2 md:order-1">
            <span className="text-sm tracking-wider uppercase text-accent mb-4 inline-block">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              We envision a world where objects serve both form and function
            </h2>
            <p className="text-muted-foreground mb-6">
              ESSENCE was founded with a simple but powerful idea: everyday objects should 
              be both beautiful and functional. Our products are designed to simplify and 
              enhance your life while adding a touch of elegance to your surroundings.
            </p>
            <p className="text-muted-foreground">
              We believe that the objects we interact with daily should be thoughtfully 
              designed, sustainably produced, and built to last. This philosophy guides 
              everything we do, from concept to creation.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden animate-slide-in opacity-0" style={{ animationDelay: '200ms', height: '500px' }}>
            <img 
              src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Our workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="layout-grid">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in opacity-0">
            <span className="text-sm tracking-wider uppercase text-accent mb-4 inline-block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              What guides our approach
            </h2>
            <p className="text-muted-foreground">
              Our values shape every decision we make, from the materials we select to the 
              partnerships we form. These principles are at the core of our identity as a brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-border rounded-lg animate-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-medium mb-4">Thoughtful Design</h3>
              <p className="text-muted-foreground">
                We believe that every detail matters. Our design process focuses on creating 
                products that solve problems elegantly while enhancing your living space.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-medium mb-4">Quality Materials</h3>
              <p className="text-muted-foreground">
                We carefully select materials that are not only beautiful but also durable 
                and sustainable, ensuring our products withstand the test of time.
              </p>
            </div>
            <div className="p-6 border border-border rounded-lg animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <h3 className="text-xl font-medium mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                Our commitment to the environment influences every aspect of our business, 
                from sourcing materials to packaging and shipping methods.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-grid">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in opacity-0">
            <span className="text-sm tracking-wider uppercase text-accent mb-4 inline-block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
              The people behind ESSENCE
            </h2>
            <p className="text-muted-foreground">
              We're a diverse team of designers, craftspeople, and thinkers united by a 
              shared passion for creating exceptional products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="rounded-lg overflow-hidden mb-4" style={{ height: '320px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Sarah Johnson</h3>
              <p className="text-muted-foreground">Founder & Creative Director</p>
            </div>
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="rounded-lg overflow-hidden mb-4" style={{ height: '320px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">David Chen</h3>
              <p className="text-muted-foreground">Lead Product Designer</p>
            </div>
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="rounded-lg overflow-hidden mb-4" style={{ height: '320px' }}>
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Emma Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium">Emma Rodriguez</h3>
              <p className="text-muted-foreground">Sustainability Director</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
