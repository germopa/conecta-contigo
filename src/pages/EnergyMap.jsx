import React, { useState } from "react";
import { motion } from "framer-motion";

const energyLevels = [
  { label: "Alta", color: "bg-green-400" },
  { label: "Media", color: "bg-yellow-400" },
  { label: "Baja", color: "bg-red-400" },
  { label: "Estable", color: "bg-blue-400" },
  { label: "Inestable", color: "bg-purple-400" },
];

const EnergyMap = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [dayEnergies, setDayEnergies] = useState({});

  const daysInMonth = 30; // Simplificado para el ejemplo

  const handleSelectEnergy = (energy) => {
    setDayEnergies((prev) => ({
      ...prev,
      [selectedDay]: energy,
    }));
    setSelectedDay(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-blue-700">Mapa Energético</h1>
        <p className="text-gray-600">Selecciona el nivel de energía para cada día</p>
      </motion.div>

      <div className="grid grid-cols-5 gap-3">
        {Array.from({ length: daysInMonth }, (_, index) => {
          const day = index + 1;
          const energy = dayEnergies[day];
          return (
            <div
              key={day}
              className={`h-16 w-16 flex items-center justify-center rounded-lg border ${energy ? energy.color : "bg-white hover:bg-gray-50"} cursor-pointer`}
              onClick={() => setSelectedDay(day)}
            >
              <span className="text-gray-800 font-semibold">{day}</span>
            </div>
          );
        })}
      </div>

      {selectedDay && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-6 bg-white rounded-lg shadow-md text-center"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Selecciona la energía para el día {selectedDay}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {energyLevels.map((level) => (
              <button
                key={level.label}
                onClick={() => handleSelectEnergy(level)}
                className={`px-4 py-2 rounded-full text-white ${level.color} hover:brightness-110`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EnergyMap;
