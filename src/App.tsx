import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home/Home";
import { Partners } from "./Components/Partners";
import { PredictionPage } from "./Components/PredictionPage";

export const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased relative">
      {/* Navbar sab se upar render hogi */}
      <Navbar />

      {/* Main content area */}
      <main className="w-full">
        <Routes>
          {/* Main Route (/): Jab user Homepage par click karega ya logo par, 
            toh Home section aur Partners section dono aik sath samne nazar aayenge!
          */}
          <Route
            path="/"
            element={
              <>
                <Home />
                {/* Explore solutions button click par prediction page par le jaye ga */}
                <Partners onExploreClick={() => navigate("/prediction")} />
              </>
            }
          />

          {/* Prediction Route (/prediction): Alag se simulation page khulega */}
          <Route path="/prediction" element={<PredictionPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
