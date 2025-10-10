import { Link } from "react-router-dom";
import { memo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm">
            © {currentYear}, Arca Marina, LLC. All rights reserved
          </p>
          <Link 
            to="/privacy" 
            className="text-sm hover:text-secondary transition-colors inline-block"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
