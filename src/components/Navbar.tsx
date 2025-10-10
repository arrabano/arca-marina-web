import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/arca-marina-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About us" },
    { to: "/products", label: "Our products" },
    { to: "/sustainability", label: "Sustainability" },
    { to: "/contact", label: "Contact us" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity py-2">
            <img src={logo} alt="Arca Marina - Ocean's Finest Fish" className="h-12 w-auto brightness-0 invert" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-base font-semibold transition-all duration-300 hover:text-white ${
                    isActive ? "text-white" : "text-white/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/90 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-semibold transition-colors hover:text-white ${
                      isActive ? "text-white" : "text-white/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
