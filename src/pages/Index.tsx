
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parallax calculation
  const calculateParallax = (factor: number) => {
    return scrollY * factor;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 layout-grid">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-sm tracking-wider uppercase text-accent mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Digital Agency
          </span>
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-tight mb-8 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            We build modern digital <span className="relative after:content-[''] after:absolute after:bottom-2 after:left-0 after:h-1 after:w-full after:bg-accent">experiences</span> and brands
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            We're a creative digital agency focused on growing brands through carefully crafted design and development experiences.
          </p>
          <div className="flex gap-4 animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
            <Link to="/work">
              <Button variant="primary" size="lg">
                View Our Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Parallax Circles */}
        <div 
          className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-accent/10 opacity-70 animate-image-glow" 
          style={{ transform: `translateY(${calculateParallax(-0.1)}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 opacity-70" 
          style={{ transform: `translateY(${calculateParallax(-0.2)}px)` }}
        ></div>
      </section>
      
      {/* Featured Work Section */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-grid">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Featured</span>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Our Recent Work</h2>
            </div>
            <Link to="/work" className="group inline-flex items-center mt-4 md:mt-0 text-foreground hover:text-accent transition-colors">
              View all projects 
              <ChevronRight size={18} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="project-card group relative animate-fade-in opacity-0 rounded-lg overflow-hidden" style={{ animationDelay: '200ms' }}>
              <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1170" 
                  alt="Digital platform design project" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300"></div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-sm text-muted-foreground">Web Platform</span>
                <h3 className="text-xl font-medium">Fintech Dashboard Redesign</h3>
                <p className="text-muted-foreground">A complete overhaul of the user experience for a leading fintech company.</p>
              </div>
              <Link to="/work/project-1" className="absolute inset-0" aria-label="View Fintech Dashboard project"></Link>
            </div>
            
            <div className="project-card group relative animate-fade-in opacity-0 rounded-lg overflow-hidden" style={{ animationDelay: '400ms' }}>
              <div className="relative aspect-[16/10] bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1170" 
                  alt="E-commerce website project" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-300"></div>
              </div>
              <div className="p-6 space-y-2">
                <span className="text-sm text-muted-foreground">E-Commerce</span>
                <h3 className="text-xl font-medium">Premium Fashion Brand</h3>
                <p className="text-muted-foreground">End-to-end e-commerce solution with custom checkout and CMS integration.</p>
              </div>
              <Link to="/work/project-2" className="absolute inset-0" aria-label="View Fashion Brand project"></Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="layout-grid">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">What We Can Do For You</h2>
            <p className="text-muted-foreground text-lg">
              From brand identity to full-scale digital products, we create experiences that connect with your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="service-card space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium">Digital Strategy</h3>
              <p className="text-muted-foreground">We help define your digital direction with research-backed strategies that align with your business goals.</p>
              <Link to="/services/strategy" className="group inline-flex items-center text-foreground hover:text-accent transition-colors">
                Learn more 
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="service-card space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium">Web Design & Development</h3>
              <p className="text-muted-foreground">Custom website and application development with a focus on performance, accessibility, and user experience.</p>
              <Link to="/services/development" className="group inline-flex items-center text-foreground hover:text-accent transition-colors">
                Learn more 
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="service-card space-y-6 animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="w-12 h-12 bg-accent/10 text-accent flex items-center justify-center rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium">Brand Identity</h3>
              <p className="text-muted-foreground">We craft distinctive visual identities that communicate your brand's values and resonate with your target audience.</p>
              <Link to="/services/branding" className="group inline-flex items-center text-foreground hover:text-accent transition-colors">
                Learn more 
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="layout-grid">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">How We Work</h2>
            <p className="text-muted-foreground text-lg">
              Our collaborative process ensures we deliver solutions that meet your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="process-step relative pb-12 md:pb-0 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="absolute top-0 left-6 h-full md:h-0.5 md:top-6 md:left-0 md:w-full">
                <div className="w-0.5 md:w-full h-full md:h-0.5 bg-border relative">
                  <div className="absolute top-0 left-0 md:left-full md:-translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground font-medium">1</div>
                </div>
              </div>
              <div className="pl-16 md:pl-0 md:pt-16">
                <h3 className="text-xl font-medium mb-3">Discovery</h3>
                <p className="text-muted-foreground">We dive deep into understanding your business, goals, and target audience.</p>
              </div>
            </div>
            
            <div className="process-step relative pb-12 md:pb-0 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="absolute top-0 left-6 h-full md:h-0.5 md:top-6 md:left-0 md:w-full">
                <div className="w-0.5 md:w-full h-full md:h-0.5 bg-border relative">
                  <div className="absolute top-0 left-0 md:left-full md:-translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground font-medium">2</div>
                </div>
              </div>
              <div className="pl-16 md:pl-0 md:pt-16">
                <h3 className="text-xl font-medium mb-3">Strategy</h3>
                <p className="text-muted-foreground">We develop a strategic roadmap for achieving your desired outcomes.</p>
              </div>
            </div>
            
            <div className="process-step relative pb-12 md:pb-0 animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="absolute top-0 left-6 h-full md:h-0.5 md:top-6 md:left-0 md:w-full">
                <div className="w-0.5 md:w-full h-full md:h-0.5 bg-border relative">
                  <div className="absolute top-0 left-0 md:left-full md:-translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground font-medium">3</div>
                </div>
              </div>
              <div className="pl-16 md:pl-0 md:pt-16">
                <h3 className="text-xl font-medium mb-3">Execution</h3>
                <p className="text-muted-foreground">Our team crafts tailored solutions through iterative development.</p>
              </div>
            </div>
            
            <div className="process-step relative animate-fade-in opacity-0" style={{ animationDelay: '700ms' }}>
              <div className="absolute top-0 left-6 h-1/2 md:h-0.5 md:top-6 md:left-0 md:w-1/2">
                <div className="w-0.5 md:w-full h-full md:h-0.5 bg-border relative">
                  <div className="absolute top-0 left-0 md:left-full md:-translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary-foreground font-medium">4</div>
                </div>
              </div>
              <div className="pl-16 md:pl-0 md:pt-16">
                <h3 className="text-xl font-medium mb-3">Launch & Optimize</h3>
                <p className="text-muted-foreground">We deliver your project and provide ongoing support and optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="layout-grid">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sm tracking-wider uppercase text-accent mb-2 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              We let our work and clients speak for us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-secondary/50 rounded-lg animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <svg className="text-accent mb-6" width="30" height="30" viewBox="0 0 40 40" fill="currentColor">
                <path d="M14.9,6.5c-5.5,3.6-9.7,10.6-10.7,17.9h8.3c0.3,0,0.6,0.2,0.6,0.6v13.4c0,0.3-0.2,0.6-0.6,0.6H0.6C0.2,39,0,38.8,0,38.4
                V25.1C0,11.8,7.3,1.4,17.2,0c0.3,0,0.5,0.2,0.3,0.5L14.9,6.5z"/>
                <path d="M37.7,6.5c-5.5,3.6-9.7,10.6-10.7,17.9h8.3c0.3,0,0.6,0.2,0.6,0.6v13.4c0,0.3-0.2,0.6-0.6,0.6H23.4
                c-0.3,0-0.6-0.2-0.6-0.6V25.1c0-13.3,7.3-23.7,17.2-25.1c0.3,0,0.5,0.2,0.3,0.5L37.7,6.5z"/>
              </svg>
              <p className="text-lg mb-6">
                "The team at Grebban completely transformed our digital presence. Their strategic approach and attention to detail exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200" 
                    alt="Client portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Director, TechFirm</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-secondary/50 rounded-lg animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <svg className="text-accent mb-6" width="30" height="30" viewBox="0 0 40 40" fill="currentColor">
                <path d="M14.9,6.5c-5.5,3.6-9.7,10.6-10.7,17.9h8.3c0.3,0,0.6,0.2,0.6,0.6v13.4c0,0.3-0.2,0.6-0.6,0.6H0.6C0.2,39,0,38.8,0,38.4
                V25.1C0,11.8,7.3,1.4,17.2,0c0.3,0,0.5,0.2,0.3,0.5L14.9,6.5z"/>
                <path d="M37.7,6.5c-5.5,3.6-9.7,10.6-10.7,17.9h8.3c0.3,0,0.6,0.2,0.6,0.6v13.4c0,0.3-0.2,0.6-0.6,0.6H23.4
                c-0.3,0-0.6-0.2-0.6-0.6V25.1c0-13.3,7.3-23.7,17.2-25.1c0.3,0,0.5,0.2,0.3,0.5L37.7,6.5z"/>
              </svg>
              <p className="text-lg mb-6">
                "Working with Grebban has been a game-changer for our business. Their expertise in both design and development is impressive."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=200" 
                    alt="Client portrait" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">David Chen</h4>
                  <p className="text-sm text-muted-foreground">CEO, Startup Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="layout-grid flex flex-col items-center text-center">
          <span className="text-sm tracking-wider uppercase text-primary-foreground/70 mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Ready to work together?
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight max-w-3xl mb-6 animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            Let's build something amazing together
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            We're always looking for new challenges and interesting projects. Get in touch and let's discuss how we can help.
          </p>
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
