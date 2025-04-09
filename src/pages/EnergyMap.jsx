
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format, startOfWeek, addDays } from "date-fns";
import { es } from "date-fns/locale";

const emotions = {
  calm: { color: "bg-blue-200", label: "Calma" },
  happy: { color: "bg-yellow-200", label: "Felicidad" },
  energetic: { color: "bg-green-200", label: "Energía" },
  reflective: { color: "bg-purple-200", label: "Reflexión" },
  tired: { color: "bg-gray-200", label: "Cansancio" },
};

const EnergyMap = () => {
  const [energyData, setEnergyData] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("energyMapData");
    if (savedData) {
      setEnergyData(JSON.parse(savedData));
    }
  }, []);

  const saveEmotion = (date, emotion) => {
    const newData = {
      ...energyData,
      [date]: emotion,
    };
    setEnergyData(newData);
    localStorage.setItem("energyMapData", JSON.stringify(newData));
  };

  const getWeekDays = () => {
    const start = startOfWeek(new Date(), { weekStartsOn: 1 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Tu Mapa de Energía
        </h1>
        <p className="text-gray-600">
          Observa y registra tus estados energéticos
        </p>
      </motion.div>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-8 grid grid-cols-7 gap-4">
          {getWeekDays().map((date) => {
            const dateStr = format(date, "yyyy-MM-dd");
            const emotion = energyData[dateStr];

            return (
              <div key={dateStr} className="text-center">
                <p className="mb-2 text-sm text-gray-500">
                  {format(date, "EEEE", { locale: es })}
                </p>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mx-auto"
                >
                  <div
                    className={`energy-map-day ${
                      emotion ? emotions[emotion].color : "bg-gray-100"
                    }`}
                    onClick={() => {
                      const nextEmotion = !emotion
                        ? "calm"
                        : emotion === "calm"
                        ? "happy"
                        : emotion === "happy"
                        ? "energetic"
                        : emotion === "energetic"
                        ? "reflective"
                        : emotion === "reflective"
                        ? "tired"
                        : null;
                      if (nextEmotion) saveEmotion(dateStr, nextEmotion);
                    }}
                  />
                </motion.div>
                {emotion && (
                  <p className="mt-2 text-xs text-gray-600">
                    {emotions[emotion].label}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(emotions).map(([key, { color, label }]) => (
            <div key={key} className="flex items-center space-x-2">
              <div className={`h-4 w-4 rounded ${color}`} />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EnergyMap;
