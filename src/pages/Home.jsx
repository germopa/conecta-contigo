
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Brain } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const emotionalButtons = [
    {
      icon: Heart,
      label: "Calmar mi mente",
      color: "from-purple-200 to-pink-100",
      action: () => navigate("/exercises"),
    },
    {
      icon: Sparkles,
      label: "Subir mi energía",
      color: "from-amber-200 to-yellow-100",
      action: () => navigate("/exercises"),
    },
    {
      icon: Brain,
      label: "Buscar claridad",
      color: "from-blue-200 to-cyan-100",
      action: () => navigate("/journal"),
    },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Bienvenido a tu espacio de paz interior
        </h1>
        <p className="text-lg text-gray-600">
          ¿Cómo te sientes hoy?
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {emotionalButtons.map(({ icon: Icon, label, color, action }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant="ghost"
              className={`emotional-button h-40 w-full bg-gradient-to-br ${color} p-6 text-gray-800`}
              onClick={action}
            >
              <div className="flex flex-col items-center space-y-4">
                <Icon className="h-8 w-8" />
                <span className="text-lg font-medium">{label}</span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Tu momento de conexión
        </h2>
        <p className="text-gray-600">
          Este es tu espacio seguro para reconectar contigo mismo, explorar tus emociones
          y nutrir tu bienestar interior. Cada día es una nueva oportunidad para crecer
          y encontrar equilibrio.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
