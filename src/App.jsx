import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/ui/Header";
import AboutUs from "./components/pages/AboutUs";

import Home from "./components/pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="font-sans bg-gray-100 dark:bg-gray-900 dark:text-white text-neutral-800">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
