
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const exercises = [
  {
    title: "Respiración Consciente",
    description: "Inhala por 4 segundos, mantén por 4, exhala por 4",
    duration: 60,
  },
  {
    title: "Escaneo Corporal",
    description: "Recorre tu cuerpo con atención plena, desde los pies hasta la cabeza",
    duration: 180,
  },
  {
    title: "Visualización Sanadora",
    description: "Imagina una luz cálida que recorre y sana tu cuerpo",
    duration: 120,
  },
];

const Exercises = () => {
  const [activeExercise, setActiveExercise] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startExercise = (exercise) => {
    setActiveExercise(exercise);
    setTimer(exercise.duration);
    setIsActive(true);

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setIsActive(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Ejercicios Guiados
        </h1>
        <p className="text-gray-600">
          Prácticas simples para reconectar con tu ser interior
        </p>
      </motion.div>

      {activeExercise ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center space-y-6 rounded-lg bg-white p-8 text-center shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeExercise.title}
          </h2>
          <p className="text-gray-600">{activeExercise.description}</p>
          
          <motion.div
            animate={{
              scale: isActive ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="breathing-exercise"
          >
            <span className="text-3xl font-bold text-gray-800">
              {Math.floor(timer)}
            </span>
          </motion.div>

          {!isActive && (
            <Button
              onClick={() => setActiveExercise(null)}
              className="mt-4"
            >
              Volver a ejercicios
            </Button>
          )}
        </motion.div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {exercise.title}
              </h3>
              <p className="mb-4 text-gray-600">{exercise.description}</p>
              <Button
                onClick={() => startExercise(exercise)}
                className="w-full"
              >
                Comenzar
              </Button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercises;
