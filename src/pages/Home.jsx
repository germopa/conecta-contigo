import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const frasesDelDia = [
  "Hoy elijo soltar lo que no puedo controlar 🌿",
  "Eres suficiente tal como eres 💜",
  "Mi energía está alineada con mi propósito ✨",
  "Respiro profundo, confío, suelto y fluyo 🌬️",
  "Lo que necesito, me está buscando también 💫",
  "Merezco descanso, amor y presencia 🤍",
  "Mi mente está en calma, mi corazón agradecido 🌸",
  "Confío en el proceso de la vida 🙏",
  "Cada respiración me regresa al presente 🍃",
  "Todo lo que busco, ya habita dentro de mí 🔮",
  "Mi alma conoce el camino, solo debo escuchar 💫",
  "Hoy soy más suave conmigo mismo/a 🌷",
  "Acepto lo que siento sin juzgarme 💧",
  "Mi valor no depende de lo que hago, sino de lo que soy ✨",
  "Estoy a salvo en mi propia compañía 🫶",
  "Doy un paso a la vez, sin prisa y con amor 🐢",
  "Hoy elijo cuidar mi energía como un tesoro 💎",
  "El silencio también es sabiduría 🕊️",
  "Agradezco este momento, justo como es 🪷",
  "Mi intuición es una guía segura 🔔",
  "Merezco una vida llena de paz y belleza 🌺",
  "Abrazo lo incierto con confianza ☁️",
  "Mis emociones no me definen, solo me visitan 🌀",
  "Hoy florezco a mi propio ritmo 🌼",
  "Nada externo puede apagar mi luz interior 🌟",
  "Estoy conectado/a con algo más grande que yo 🌌",
  "Me doy permiso de descansar sin culpa 🛌",
  "Soy parte del todo, y eso es suficiente 🧘‍♀️",
  "Cada día es una nueva oportunidad para sentir y sanar 🌞",
  "Estoy exactamente donde debo estar ahora 🧭"
];

const Home = () => {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const dayOfMonth = new Date().getDate(); // 1 a 31
    const index = (dayOfMonth - 1) % frasesDelDia.length;
    setFrase(frasesDelDia[index]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-purple-100 via-white to-purple-50">
      <h1 className="text-4xl font-bold mb-4 text-purple-800">✨ Conecta Contigo</h1>

      <p className="text-lg text-purple-700 italic mb-6 max-w-lg">
        “{frase}”
      </p>

      <p className="text-gray-700 max-w-xl mb-8">
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
          Leer afirmaciones
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


