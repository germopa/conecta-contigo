import React, { useState } from "react";
import { motion } from "framer-motion";

const emotions = [
  {
    label: "Tristeza",
    color: "bg-blue-200",
    affirmation: "Me permito sentir y liberar mi tristeza.",
    suggestion: "Haz una pausa para escribir lo que te duele.",
  },
  {
    label: "Enojo",
    color: "bg-red-200",
    affirmation: "Reconozco mi enojo sin juzgarme.",
    suggestion: "Respira profundo 3 veces antes de reaccionar.",
  },
  {
    label: "Alegría",
    color: "bg-yellow-200",
    affirmation: "Disfruto plenamente este momento.",
    suggestion: "Comparte tu alegría con alguien hoy.",
  },
  {
    label: "Miedo",
    color: "bg-purple-200",
    affirmation: "Soy más fuerte que mis miedos.",
    suggestion: "Recuerda una vez que superaste algo difícil.",
  },
  {
    label: "Calma",
    color: "bg-green-200",
    affirmation: "Estoy presente, en paz y en equilibrio.",
    suggestion: "Haz una respiración lenta y profunda.",
  },
];

const EmotionalWheel = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-white via-purple-50 to-purple-100 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-700 mb-6"
      >
        Rueda Emocional
      </motion.h1>

      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Selecciona la emoción que más sientes en este momento. Recibirás una afirmación y una sugerencia para reconectar contigo.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {emotions.map((emo) => (
          <button
            key={emo.label}
            className={`px-5 py-3 rounded-full font-medium ${emo.color} hover:brightness-110 transition`}
            onClick={() => setSelected(emo)}
          >
            {emo.label}
          </button>
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-lg px-6 py-6 max-w-md mx-auto border"
        >
          <h2 className="text-xl font-bold text-purple-700 mb-2">Afirmación</h2>
          <p className="italic text-gray-700 mb-4">"{selected.affirmation}"</p>
          <h3 className="text-lg font-semibold text-purple-600 mb-1">Sugerencia</h3>
          <p className="text-gray-600">{selected.suggestion}</p>
        </motion.div>
      )}
    </div>
  );
};

export default EmotionalWheel;
