import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { memo, useCallback, useState } from "react";
import logo from "@/assets/arca-marina-logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/products", label: "Our products" },
  { to: "/sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact us" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="h-14 w-40 md:h-16 md:w-44 flex items-center">
              <img
                src={logo}
                alt="Arca Marina - Ocean's Finest Fish"
                className="w-full h-full object-contain brightness-0 invert"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
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
            onClick={handleToggle}
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
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={handleClose}
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

export default memo(Navbar);
