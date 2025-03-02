
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  images: string[];
  colors: string[];
  featured: boolean;
  bestseller: boolean;
  newArrival: boolean;
  details: string[];
  specifications: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 89.99,
    description: "A sleek, adjustable desk lamp with wireless charging capability and touch controls. Perfect for modern workspaces and bedside tables.",
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534189283006-b3179e1fa3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#E0E0E0", "#2E2E2E", "#E8D7B9"],
    featured: true,
    bestseller: true,
    newArrival: false,
    details: [
      "Adjustable arm and head for perfect positioning",
      "Built-in wireless charging pad for compatible devices",
      "Touch-sensitive controls with 3 brightness levels",
      "Energy-efficient LED with 50,000 hour lifespan",
      "Cable management system for clean aesthetic"
    ],
    specifications: {
      "Dimensions": "18 x 6 x 20 inches",
      "Weight": "2.4 lbs",
      "Material": "Aluminum, Silicone",
      "Voltage": "100-240V 50/60Hz",
      "Power": "9W LED + 10W charger",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Home Speaker",
    price: 129.99,
    description: "A premium smart speaker with crystal clear sound and intelligent assistant capabilities, all wrapped in a beautifully minimal design.",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1589003077984-894e62f2ac23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1589003077984-894e62f2ac23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517424420815-5962c8c2bbc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#FFFFFF", "#000000", "#FAF6F0"],
    featured: false,
    bestseller: true,
    newArrival: false,
    details: [
      "360° omnidirectional sound with deep bass",
      "Voice control with multiple assistant compatibility",
      "Multi-room audio synchronization",
      "Adaptive sound technology adjusts to room acoustics",
      "Far-field microphones for voice recognition across the room"
    ],
    specifications: {
      "Dimensions": "6.5 x 6.5 x 8 inches",
      "Weight": "3.2 lbs",
      "Connectivity": "WiFi, Bluetooth 5.0",
      "Power": "15W",
      "Battery": "None (requires power outlet)",
      "Warranty": "1 year"
    }
  },
  {
    id: 3,
    name: "Ceramic Pour-Over Coffee Set",
    price: 64.99,
    description: "A handcrafted ceramic pour-over coffee set that combines traditional brewing methods with modern design sensibilities.",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#F5F0E9", "#2A2F33", "#93795A"],
    featured: false,
    bestseller: false,
    newArrival: true,
    details: [
      "Hand-crafted from high-quality ceramic",
      "Includes pour-over dripper, server, and measuring spoon",
      "Fine mesh stainless steel filter included (no paper filters needed)",
      "Heat-resistant handle design",
      "Designed for optimal water flow and extraction"
    ],
    specifications: {
      "Dimensions": "Dripper: 4 x 4 x 4 inches, Server: 6 x 4 x 6 inches",
      "Capacity": "600ml (20oz)",
      "Materials": "Ceramic, Stainless Steel",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes (server only)",
      "Warranty": "1 year"
    }
  },
  {
    id: 4,
    name: "Modular Desk Organizer",
    price: 49.99,
    description: "A customizable desk organization system with interchangeable components, crafted from sustainable materials.",
    category: "Office",
    image: "https://images.unsplash.com/photo-1547043688-32b236694495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1547043688-32b236694495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593114970899-95c26e8d8841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#D9D4CD", "#394047", "#98A1A9"],
    featured: false,
    bestseller: false,
    newArrival: true,
    details: [
      "Modular design with interchangeable components",
      "Includes phone stand, pen holder, and small drawer",
      "Magnetic connections for flexible arrangement",
      "Made from sustainable bamboo and recycled aluminum",
      "Non-slip base keeps everything secure"
    ],
    specifications: {
      "Dimensions": "12 x 6 x 4 inches (fully assembled)",
      "Weight": "1.8 lbs",
      "Materials": "Bamboo, Recycled Aluminum, Silicone",
      "Components": "5 interchangeable modules",
      "Assembly": "No tools required",
      "Warranty": "1 year"
    }
  },
  {
    id: 5,
    name: "Minimalist Wall Clock",
    price: 79.99,
    description: "A simple yet sophisticated wall clock with a numberless design and silent sweeping movement for distraction-free timekeeping.",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1594387695168-dce06e8794c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1594387695168-dce06e8794c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#FFFFFF", "#2D2D2D", "#EADDCA"],
    featured: true,
    bestseller: true,
    newArrival: false,
    details: [
      "Numberless minimal face design",
      "Silent sweeping movement (no ticking)",
      "Precision quartz movement with Japanese mechanism",
      "Constructed from solid wood and aluminum",
      "Easy installation with included hardware"
    ],
    specifications: {
      "Dimensions": "12 inch diameter x 1.5 inch depth",
      "Weight": "1.5 lbs",
      "Materials": "Solid Wood, Aluminum, Glass",
      "Battery": "1 AA battery (included)",
      "Movement": "Japanese Quartz",
      "Warranty": "2 years"
    }
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 39.99,
    description: "An elegant wireless charging pad made from premium materials that complements any space while quickly charging your devices.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1603539444875-76e7684265f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1603539444875-76e7684265f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#E0E0E0", "#000000", "#D4B796"],
    featured: false,
    bestseller: true,
    newArrival: false,
    details: [
      "Fast 15W wireless charging capability",
      "Compatible with all Qi-enabled devices",
      "Premium materials: aluminum frame with cork or leather top",
      "Non-slip base with subtle LED charging indicator",
      "Includes braided USB-C cable"
    ],
    specifications: {
      "Dimensions": "4 x 4 x 0.5 inches",
      "Weight": "0.3 lbs",
      "Input": "USB-C, 5V/3A, 9V/2A",
      "Output": "15W max (device dependent)",
      "Materials": "Aluminum, Cork or Leather",
      "Warranty": "1 year"
    }
  },
  {
    id: 7,
    name: "Minimalist Pocket Notebook",
    price: 19.99,
    description: "A set of three premium pocket notebooks with dot grid pages, crafted from sustainable materials with a minimalist aesthetic.",
    category: "Stationery",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618365575447-65b7a8210614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544239265-ee5eedde5469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#D8D3CD", "#3C4349", "#8A8077"],
    featured: false,
    bestseller: false,
    newArrival: true,
    details: [
      "Set of three pocket-sized notebooks",
      "80 pages of premium 100gsm paper with dot grid pattern",
      "Covers made from recycled materials with minimal branding",
      "Rounded corners and lie-flat binding",
      "Back pocket for storing loose items"
    ],
    specifications: {
      "Dimensions": "3.5 x 5.5 inches",
      "Pages": "80 per notebook",
      "Paper Weight": "100gsm",
      "Cover Material": "Recycled Cardstock",
      "Binding": "Thread-bound",
      "Package Contents": "3 notebooks in different colors"
    }
  },
  {
    id: 8,
    name: "Pure Wool Throw Blanket",
    price: 89.99,
    description: "A luxuriously soft throw blanket made from 100% New Zealand wool with a minimal geometric pattern, perfect for both warmth and style.",
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1600369672770-985fd30e288e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600369672770-985fd30e288e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ],
    colors: ["#F2EFE9", "#7D7F7D", "#B89B8C"],
    featured: false,
    bestseller: true,
    newArrival: false,
    details: [
      "Made from 100% New Zealand wool",
      "Subtle geometric pattern with minimalist aesthetic",
      "Hand-finished edges with high-quality craftsmanship",
      "Naturally temperature regulating and hypoallergenic",
      "Ethically sourced and sustainably produced"
    ],
    specifications: {
      "Dimensions": "50 x 70 inches",
      "Weight": "2.2 lbs",
      "Material": "100% New Zealand Wool",
      "Care": "Dry clean only",
      "Origin": "Crafted in New Zealand",
      "Warranty": "5 year limited warranty"
    }
  }
];
