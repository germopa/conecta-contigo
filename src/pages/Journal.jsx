import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Journal = () => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-yellow-50 via-white to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl text-center space-y-6"
      >
        <h1 className="text-3xl font-bold text-purple-700">
          Diario de Reflexión Emocional
        </h1>
        <p className="text-gray-700">
          Este es tu espacio privado para escribir lo que sientes. Nada se guarda ni se comparte. Esto es solo para ti, en este momento.
        </p>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe lo que está en tu corazón..."
          className="w-full h-64 p-4 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md text-gray-800 text-lg resize-none bg-white"
        />

        <Button
          onClick={handleClear}
          className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
        >
          Vaciar y empezar de nuevo
        </Button>
      </motion.div>
    </div>
  );
};

export default Journal;

