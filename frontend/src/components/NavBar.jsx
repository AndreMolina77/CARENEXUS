import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/sobreNosotros", label: "Sobre Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div 
        className="text-xl font-bold cursor-pointer" 
        onClick={() => navigate("/")}
      >
        MiSitio
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `hover:underline ${isActive ? "font-bold underline" : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-700 flex flex-col items-center gap-4 py-4 md:hidden">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `hover:underline ${isActive ? "font-bold underline" : ""}`
                }
                onClick={() => setIsMobileMenuOpen(false)} // cerrar menú al dar click
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
