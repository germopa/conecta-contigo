import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const frasesDelDia = [
  "Hoy elijo soltar lo que no puedo controlar 🌿",
  "Eres suficiente tal como eres 💜",
  "Mi energía está alineada con mi propósito ✨",
  "Respiro profundo, confío, suelto y fluyo 🌬️",
  "Lo que necesito, me está buscando también 💫",
  "Merezco descanso, amor y presencia 🧼",
  "Mi mente está en calma, mi corazón agradecido 🌸",
  "Confío en el proceso de la vida 🙏",
  "Cada respiración me regresa al presente 🍃",
  "Todo lo que busco, ya habita dentro de mí 🔮",
  "Mi alma conoce el camino, solo debo escuchar 💫",
  "Hoy soy más suave conmigo mismo/a 🌷",
  "Acepto lo que siento sin juzgarme 💧",
  "Mi valor no depende de lo que hago, sino de lo que soy ✨",
  "Estoy a salvo en mi propia compañía 🦦",
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
  "Me doy permiso de descansar sin culpa 💌",
  "Soy parte del todo, y eso es suficiente 🧘‍♀️",
  "Cada día es una nueva oportunidad para sentir y sanar 🌞",
  "Estoy exactamente donde debo estar ahora 🧽"
];

const Home = () => {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const dayOfMonth = new Date().getDate();
    const index = (dayOfMonth - 1) % frasesDelDia.length;
    setFrase(frasesDelDia[index]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center bg-gradient-to-b from-purple-700 via-purple-400 to-blue-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl space-y-8"
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-md">
          ✨ Conecta Contigo
        </h1>

        <h2 className="text-2xl text-white/90 font-medium">
          Ejercicios mentales y frases para tu bienestar emocional
        </h2>

        <p className="text-2xl text-white italic font-semibold">
          “{frase}”
        </p>

        <p className="text-white/90 text-lg">
          Dedica 60 segundos a reconectar contigo mismo. Aquí encontrarás frases positivas, ejercicios mentales breves y herramientas para mejorar tu claridad emocional, reducir el estrés y vivir en equilibrio.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/journal"
            className="bg-white text-purple-700 px-8 py-4 rounded-full shadow-lg text-lg font-semibold hover:bg-purple-100 transition"
          >
            Iniciar mi Reconexión
          </Link>

          <div className="flex flex-col gap-3 mt-4">
            <Link
              to="/affirmations"
              className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full hover:bg-purple-200 transition"
            >
              Leer afirmaciones
            </Link>

            <Link
              to="/exercises"
              className="bg-purple-300 text-purple-900 px-6 py-3 rounded-full hover:bg-purple-400 transition"
            >
              Respirar y reconectar
            </Link>

            <Link
              to="/breathing"
              className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full hover:bg-blue-200 transition"
            >
              Respiración guiada
            </Link>

            <Link
              to="/focus-minute"
              className="bg-green-100 text-green-800 px-6 py-3 rounded-full hover:bg-green-200 transition"
            >
              1 minuto consciente
            </Link>

            <Link
              to="/quick-support"
              className="bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full hover:bg-yellow-200 transition"
            >
              ¿Cómo me siento hoy?
            </Link>
          </div>
        </div>

        <div className="mt-10 bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-left shadow-lg">
          <h3 className="text-white text-xl font-semibold mb-3">
            Un espacio simple para volver a ti
          </h3>
          <p className="text-white/90 leading-relaxed">
            Reflexión Contigo es una guía práctica para detenerte un momento,
            respirar, observar cómo te sientes y reconectar con tu calma
            interior. Explora ejercicios breves, afirmaciones y herramientas
            emocionales para acompañarte en tu día.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;