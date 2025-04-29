// src/pages/Affirmations.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const affirmations = [
  { text: "Confío plenamente en el camino de mi vida.", action: "Hoy repite esta frase 3 veces en voz alta." },
  { text: "Soy merecedor de amor y éxito.", action: "Anota 3 cosas buenas que lograste esta semana." },
  { text: "Cada día es una nueva oportunidad.", action: "Sonríe intencionalmente a 3 personas hoy." },
  { text: "Mi mente y cuerpo están en equilibrio.", action: "Haz 5 respiraciones profundas conscientemente." },
  { text: "Elijo pensamientos de paz y armonía.", action: "Escucha una canción que te relaje." },
  { text: "Tengo todo lo necesario para alcanzar mis metas.", action: "Escribe una meta que quieras cumplir este mes." },
  { text: "Me libero de pensamientos negativos.", action: "Cuando notes un pensamiento negativo, reemplázalo por uno positivo." },
  { text: "Mi energía atrae bendiciones a mi vida.", action: "Visualiza algo bueno que quieres recibir." },
  { text: "Acepto mis emociones y las dejo fluir.", action: "Haz una pausa de 1 minuto para sentir tu respiración." },
  { text: "Merezco descanso y cuidado.", action: "Regálate 15 minutos para hacer algo que disfrutes hoy." },
  { text: "Estoy en constante evolución y aprendizaje.", action: "Anota algo nuevo que aprendiste esta semana." },
  { text: "La gratitud transforma mi mundo.", action: "Escribe 3 cosas por las que te sientes agradecido hoy." },
  { text: "Todo en mi vida sucede en el momento perfecto.", action: "Confía en que estás exactamente donde debes estar." },
  { text: "Mi presencia es suficiente.", action: "Hoy permítete ser, sin exigirte más." },
  { text: "Mis palabras tienen poder y amor.", action: "Habla con amabilidad a una persona hoy." },
  { text: "Cada respiración me llena de calma.", action: "Haz 5 respiraciones conscientes ahora mismo." },
  { text: "Estoy rodeado de abundancia.", action: "Observa y agradece algo que ya tienes." },
  { text: "Mis sueños son válidos y posibles.", action: "Visualiza durante 2 minutos tu sueño hecho realidad." },
  { text: "Me permito brillar sin culpa.", action: "Reconoce en voz alta un talento que tienes." },
  { text: "La paz comienza en mí.", action: "Haz una pausa consciente de 30 segundos en tu día." },
  { text: "Cada desafío trae una oportunidad oculta.", action: "Identifica un aprendizaje en un reto reciente." },
  { text: "Hoy elijo amarme a mí mismo incondicionalmente.", action: "Hazte un pequeño regalo o gesto de cariño hoy." },
  { text: "Mi cuerpo es sabio y me guía.", action: "Escucha tu cuerpo: ¿qué necesita ahora?" },
  { text: "Tengo derecho a decir no cuando lo necesito.", action: "Respeta hoy un límite propio sin culpa." },
  { text: "Mi intuición me lleva por el mejor camino.", action: "Sigue tu primer instinto en una decisión hoy." },
  { text: "Estoy abierto a recibir amor y abundancia.", action: "Acepta hoy un cumplido sin minimizarlo." },
  { text: "Creo mi felicidad con cada elección que hago.", action: "Elige hoy una acción que te haga feliz." },
  { text: "Estoy en paz con mi pasado y emocionado por mi futuro.", action: "Cierra un ciclo interno agradeciendo tu camino." },
  { text: "Hoy decido confiar en mí mismo.", action: "Recuerda una ocasión en que superaste un obstáculo." },
  { text: "Soy luz en el mundo.", action: "Haz un pequeño acto de bondad anónimo hoy." }
];

const Affirmations = () => {
  const [todayAffirmation, setTodayAffirmation] = useState(null);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const index = (day - 1) % affirmations.length;
    setTodayAffirmation(affirmations[index]);
  }, []);

  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setTodayAffirmation(affirmations[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-pink-100 via-white to-purple-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-pink-700">🌸 Afirmación del Día</h1>
        {todayAffirmation && (
          <>
            <p className="text-2xl text-gray-700 font-semibold mb-4">
              "{todayAffirmation.text}"
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {todayAffirmation.action}
            </p>
          </>
        )}
        <Button onClick={getRandomAffirmation} className="bg-pink-500 hover:bg-pink-600 text-white">
          🔄 Quiero otra afirmación
        </Button>
      </motion.div>
    </div>
  );
};

export default Affirmations;

