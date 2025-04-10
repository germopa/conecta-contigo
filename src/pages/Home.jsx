import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-purple-100 via-white to-purple-50">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">✨ Conecta Contigo</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Bienvenida a tu espacio interior. Aquí puedes soltar lo que pesa, respirar profundo
        y reconectar con tu energía. Este es tu refugio emocional, un lugar para calmar la mente,
        cuidar el alma y escucharte desde la presencia. 🌿
      </p>
      <div className="flex flex-col gap-4">
        <Link
          to="/journal"
          className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
        >
          Escribir una reflexión
        </Link>
        <Link
          to="/affirmations"
          className="bg-white text-purple-700 px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-100 transition"
        >
          Leer una afirmación del día
        </Link>
        <Link
          to="/exercises"
          className="bg-purple-200 text-purple-900 px-6 py-3 rounded-full hover:bg-purple-300 transition"
        >
          Respirar y reconectar
        </Link>
      </div>
    </div>
  );
};

export default Home;

