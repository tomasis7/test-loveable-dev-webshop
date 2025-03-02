
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 animate-fade-in opacity-0">
        <span className="text-sm font-medium tracking-wider uppercase text-accent mb-2 inline-block">
          Error 404
        </span>
        <h1 className="text-4xl md:text-6xl font-medium mb-4">Page not found</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
