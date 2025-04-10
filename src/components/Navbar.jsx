import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Book, Sun, Wind, Calendar } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Heart, label: "Inicio" },
    { to: "/journal", icon: Book, label: "Diario" },
    { to: "/affirmations", icon: Sun, label: "Afirmaciones" },
    { to: "/exercises", icon: Wind, label: "Ejercicios" },
    { to: "/energy-map", icon: Calendar, label: "Mapa Energético" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center py-2">
          <Link to="/" className="text-2xl font-semibold text-primary mb-2 md:mb-0">
            Conecta Contigo
          </Link>
          <div className="flex flex-wrap justify-center gap-2 overflow-x-auto w-full md:w-auto">
            {links.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="relative rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary/10"
              >
                <div className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
