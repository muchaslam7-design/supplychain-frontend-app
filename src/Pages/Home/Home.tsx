import React from "react";
import { Hero } from "../../Components/Hero";

export const Home: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero section */}
      <Hero />

      {/* Dynamic Services, Grid details aur products section yahan call honge */}
    </main>
  );
};
