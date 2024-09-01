import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import KeyTerminologies from "./components/pages/KeyTerminologies";
import SevenPs from "./components/pages/SevenPs";
import Branding from "./components/pages/Branding";
import MarketingResearch from "./components/pages/MarketingResearch";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const location = useLocation();
  const showSidebar = location.pathname !== "/" && location.pathname !== "/about";

  return (
    <ThemeProvider>
      <div className="flex font-sans bg-gray-100 dark:bg-gray-900 dark:text-white text-neutral-800">
        <div className="w-full">
          <Header />
          <main className="flex">
            {showSidebar && <Sidebar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/key-terminologies" element={<KeyTerminologies />} />
              <Route path="/7ps-of-marketing" element={<SevenPs />} />
              <Route path="/branding" element={<Branding />} />
              <Route
                path="/marketing-research"
                element={<MarketingResearch />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
