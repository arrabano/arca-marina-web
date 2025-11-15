import { NavLink } from "react-router-dom";
import { memo, useCallback, useState } from "react";
import logo from "@/assets/arca-marina-logo.png";
import heroPoster from "/hero-poster.jpg";

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

  return (
    <>
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
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors z-[60]"
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
          paddingTop: "5rem",
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(0px)",
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[40px] bg-black/50" />
        <div className="container mx-auto px-8 h-full flex flex-col justify-start pt-12 relative z-10">
          <nav className="flex flex-col space-y-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={handleClose}
                className={({ isActive }) =>
                  `text-4xl font-semibold transition-colors hover:text-white/80 ${
                    isActive ? "text-[hsl(var(--brand-blue))]" : "text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
