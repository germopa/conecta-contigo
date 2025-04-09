
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Journal from "@/pages/Journal";
import Affirmations from "@/pages/Affirmations";
import Exercises from "@/pages/Exercises";
import EnergyMap from "@/pages/EnergyMap";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/affirmations" element={<Affirmations />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/energy-map" element={<EnergyMap />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
