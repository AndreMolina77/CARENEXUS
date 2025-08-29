import React, { useState} from "react";
import { useNavigate, NavLink } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


const navItems = [
    { to: "/servicios", label: "Servicios" },
    { to: "/sobreNosotros", label: "Sobre Nosotros" }
]

return(
    <nav className="text-white">
        <div className=" container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-lg font-bold">
                <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? "text-white-500 font-bold" : "text-gray-300 hover:text-gray-400" }>
                    Inicio
                </NavLink>
            </div>
            <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white-300 hover:text-white focus:outline-none">
              ☰
            </button>
            </div>
            <ul className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                    <li key={item.to}>
                        <NavLink to={item.to} className={({ isActive }) => isActive ? "text-white-500 font-bold" : "text-gray-300 hover:text-gray-400"} onClick={() => setIsMobileMenuOpen(false)}>
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
        {isMobileMenuOpen && (
            <div className="md:hidden px-4 pb-3">
                <ul className="space-y-2">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to} className={({ isActive }) => isActive ? "text-white-500 font-bold" : "text-gray-300 hover:text-gray-400"} onClick={() => setIsMobileMenuOpen(false)}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
        )}
    </nav>
 )
}