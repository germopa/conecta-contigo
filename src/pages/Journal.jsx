import React, { useState, useEffect } from "react";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [reflections, setReflections] = useState([]);

  // Cargar reflexiones guardadas desde localStorage al iniciar
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reflections")) || [];
    setReflections(saved);
  }, []);

  // Guardar en localStorage cuando cambie la lista
  useEffect(() => {
    localStorage.setItem("reflections", JSON.stringify(reflections));
  }, [reflections]);

  const handleSave = () => {
    if (entry.trim() === "") return;
    setReflections([...reflections, { text: entry, date: new Date().toLocaleString() }]);
    setEntry("");
  };

  const handleDelete = (index) => {
    const updated = reflections.filter((_, i) => i !== index);
    setReflections(updated);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">📝 Diario emocional</h1>
      <textarea
        className="w-full h-32 p-4 border rounded shadow"
        placeholder="¿Qué estás sintiendo hoy?"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Guardar reflexión
      </button>

      <div className="space-y-4 mt-6">
        <h2 className="text-xl font-medium">Reflexiones guardadas:</h2>
        {reflections.length === 0 ? (
          <p className="text-gray-500">No has guardado ninguna reflexión todavía.</p>
        ) : (
          reflections.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-purple-50 rounded shadow flex justify-between items-start"
            >
              <div>
                <p className="text-gray-800 whitespace-pre-wrap">{item.text}</p>
                <p className="text-sm text-gray-500 mt-2">{item.date}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                🗑️ Eliminar
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Journal;

