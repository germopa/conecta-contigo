import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const emotions = {
  tranquilo: "bg-blue-300",
  energetico: "bg-yellow-300",
  cansado: "bg-gray-400",
  ansioso: "bg-red-300",
  feliz: "bg-green-300",
};

const EnergyMap = () => {
  const [data, setData] = useState({});
  const today = dayjs().format("YYYY-MM-DD");

  // cargar datos guardados
  useEffect(() => {
    const saved = localStorage.getItem("energy-map");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // guardar datos cada vez que cambien
  useEffect(() => {
    localStorage.setItem("energy-map", JSON.stringify(data));
  }, [data]);

  const handleSelect = (emotion) => {
    setData({ ...data, [today]: emotion });
  };

  // genera los últimos 30 días
  const days = Array.from({ length: 30 }, (_, i) =>
    dayjs().subtract(i, "day").format("YYYY-MM-DD")
  ).reverse();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center text-purple-800">🧭 Mapa Energético</h1>
      <p className="text-center text-gray-600">
        ¿Cómo te sientes hoy? Selecciona tu estado emocional.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {Object.keys(emotions).map((emotion) => (
          <button
            key={emotion}
            onClick={() => handleSelect(emotion)}
            className={`px-4 py-2 rounded-full text-white capitalize ${emotions[emotion]}`}
          >
            {emotion}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-7 gap-3 mt-6">
        {days.map((date) => (
          <div
            key={date}
            className={`w-12 h-12 rounded flex items-center justify-center text-xs font-semibold text-white ${
              emotions[data[date]] || "bg-gray-200 text-gray-600"
            }`}
          >
            {dayjs(date).format("DD")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyMap;
