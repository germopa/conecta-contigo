
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const affirmations = [
  "Soy merecedor/a de paz y amor",
  "Cada día me conecto más con mi ser interior",
  "Confío en mi intuición y sabiduría interior",
  "Estoy en paz con quien soy",
  "Mi energía es valiosa y la protejo",
  "Atraigo experiencias positivas a mi vida",
  "Me permito sentir y sanar",
  "Soy capaz de crear el cambio que deseo",
  "Mi presencia es un regalo para el mundo",
  "Estoy seguro/a y protegido/a"
];

const Affirmations = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteAffirmations");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    generateNewAffirmation();
  }, []);

  const generateNewAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  const toggleFavorite = (affirmation) => {
    const updatedFavorites = favorites.includes(affirmation)
      ? favorites.filter(fav => fav !== affirmation)
      : [...favorites, affirmation];
    
    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteAffirmations", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Afirmación del Día
        </h1>
        <p className="text-gray-600">
          Palabras de poder para nutrir tu espíritu
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="affirmation-card"
      >
        <p className="mb-6 text-center text-2xl font-medium text-gray-800">
          {currentAffirmation}
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            onClick={() => toggleFavorite(currentAffirmation)}
          >
            {favorites.includes(currentAffirmation) ? "Quitar de favoritos" : "Guardar"}
          </Button>
          <Button onClick={generateNewAffirmation}>
            Nueva afirmación
          </Button>
        </div>
      </motion.div>

      {favorites.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Tus Afirmaciones Favoritas
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {favorites.map((affirmation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-white p-4 shadow-md"
              >
                <p className="text-gray-700">{affirmation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Affirmations;
