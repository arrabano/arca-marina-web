import { NavLink } from "react-router-dom";
import { memo, useCallback, useState, useEffect } from "react";
import logo from "@/assets/arca-marina-logo.png";
import heroPoster from "/hero-poster.jpg";
import { ScrollArea } from "@/components/ui/scroll-area";

const TwoLineIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line 
      x1="4" 
      y1="12" 
      x2="20" 
      y2="12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      style={{
        transform: isOpen ? 'rotate(45deg)' : 'translateY(-4px)',
        transformOrigin: 'center',
        transition: 'transform 0.3s ease-out'
      }}
    />
    <line 
      x1="4" 
      y1="12" 
      x2="20" 
      y2="12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      style={{
        transform: isOpen ? 'rotate(-45deg)' : 'translateY(4px)',
        transformOrigin: 'center',
        transition: 'transform 0.3s ease-out'
      }}
    />
  </svg>
);

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full border-b z-50 transition-all duration-500 ${
          isOpen 
            ? "bg-transparent border-transparent" 
            : "bg-black/30 backdrop-blur-md border-white/10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity relative z-[60]">
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
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors relative z-[60]"
              aria-label="Toggle menu"
            >
              <TwoLineIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-500 ease-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[40px] bg-black/50" />
        <ScrollArea className="h-full w-full">
          <div className="container mx-auto px-8 pt-28 pb-12 relative z-10">
            <nav className="flex flex-col space-y-8">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={handleClose}
                  className={({ isActive }) =>
                    `text-4xl font-semibold transition-colors hover:text-white/80 ${
                      isActive ? "text-brand-blue" : "text-white"
                    }`
                  }
                  style={{
                    WebkitTapHighlightColor: 'transparent',
                    WebkitTouchCallout: 'none',
                    userSelect: 'none',
                  }}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default memo(Navbar);
