import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Context
import { ThemeProvider } from "./context/ThemeContext";

// UI Components
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import NextPrevButtons from "./components/ui/NextPrevButtons";
import GlowingBlob from "./components/ui/GlowingBlob";

// Page Components
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";

// Key Terminologies
import KeyTerminologies from "./components/pages/KeyTerminologies";
import MarketingStrategyBusinessPlan from "./components/pages/KeyTerminologies/MarketingStrategyBusinessPlan";
import TargetMarket from "./components/pages/KeyTerminologies/TargetMarket";
import CompetitorAnalysis from "./components/pages/KeyTerminologies/CompetitorAnalysis";
import CompanyOverview from "./components/pages/KeyTerminologies/CompanyOverview";
import ProductServicePlan from "./components/pages/KeyTerminologies/ProductServicePlan";
import MarketingPlan from "./components/pages/KeyTerminologies/MarketingPlan";

// Seven Ps of Marketing
import SevenPs from "./components/pages/SevenPs";
import Product from "./components/pages/SevenPs/Product";
import Pricing from "./components/pages/SevenPs/Pricing";
import Place from "./components/pages/SevenPs/Place";
import Promotion from "./components/pages/SevenPs/Promotion";
import People from "./components/pages/SevenPs/People";
import Process from "./components/pages/SevenPs/Process";
import PhysicalEvidence from "./components/pages/SevenPs/PhysicalEvidence";

// Branding
import Branding from "./components/pages/Branding";
import HistoryOfBranding from "./components/pages/Branding/HistoryOfBranding";
import Definition from "./components/pages/Branding/Definition";
import CharacteristicsOfGoodBrand from "./components/pages/Branding/CharacteristicsOfGoodBrand";

// Marketing Research
import MarketingResearch from "./components/pages/MarketingResearch";
import ReasonsToConductResearch from "./components/pages/MarketingResearch/ReasonsToConductResearch";
import GuideToConduct from "./components/pages/MarketingResearch/GuideToConduct";
import NeedAndImportance from "./components/pages/MarketingResearch/NeedAndImportance";

// Quiz
import Quiz from "./components/Quiz/Quiz";
import QuizResults from "./components/Quiz/QuizResults";

function App() {
  const location = useLocation();
  const showSidebar =
    location.pathname !== "/" && location.pathname !== "/about";

  const routes = [
    "/key-terminologies",
    "/key-terminologies/marketing-strategy-business-plan",
    "/key-terminologies/target-market",
    "/key-terminologies/competitor-analysis",
    "/key-terminologies/company-overview",
    "/key-terminologies/product-service-plan",
    "/key-terminologies/marketing-plan",
    "/7ps-of-marketing",
    "/7ps-of-marketing/product",
    "/7ps-of-marketing/pricing",
    "/7ps-of-marketing/place",
    "/7ps-of-marketing/promotion",
    "/7ps-of-marketing/people",
    "/7ps-of-marketing/process",
    "/7ps-of-marketing/physical-evidence",
    "/branding",
    "/branding/history",
    "/branding/definition",
    "/branding/characteristics",
    "/marketing-research",
    "/marketing-research/reasons-to-conduct",
    "/marketing-research/guide-to-conduct",
    "/marketing-research/need-and-importance",
  ];

  const showNextPrevButtons = !["/", "/about"].includes(location.pathname) && !location.pathname.startsWith("/quiz");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen font-sans bg-gray-100 dark:bg-gray-900 dark:text-white text-neutral-800">
        <Header />
        <div className="flex flex-grow">
          {showSidebar && <Sidebar />}
          <main
            className={`flex-grow overflow-y-auto relative ${
              showSidebar ? "sm:ml-[16rem]" : ""}`}
          >
            <GlowingBlob />
            <div className="container relative z-10 mx-auto mb-4 sm:mb-8 md:mb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route
                  path="/key-terminologies"
                  element={<KeyTerminologies />}
                />
                <Route
                  path="/key-terminologies/marketing-strategy-business-plan"
                  element={<MarketingStrategyBusinessPlan />}
                />
                <Route
                  path="/key-terminologies/target-market"
                  element={<TargetMarket />}
                />
                <Route
                  path="/key-terminologies/competitor-analysis"
                  element={<CompetitorAnalysis />}
                />
                <Route
                  path="/key-terminologies/company-overview"
                  element={<CompanyOverview />}
                />
                <Route
                  path="/key-terminologies/product-service-plan"
                  element={<ProductServicePlan />}
                />
                <Route
                  path="/key-terminologies/marketing-plan"
                  element={<MarketingPlan />}
                />
                <Route path="/7ps-of-marketing" element={<SevenPs />} />
                <Route path="/7ps-of-marketing/product" element={<Product />} />
                <Route path="/7ps-of-marketing/pricing" element={<Pricing />} />
                <Route path="/7ps-of-marketing/place" element={<Place />} />
                <Route
                  path="/7ps-of-marketing/promotion"
                  element={<Promotion />}
                />
                <Route path="/7ps-of-marketing/people" element={<People />} />
                <Route path="/7ps-of-marketing/process" element={<Process />} />
                <Route
                  path="/7ps-of-marketing/physical-evidence"
                  element={<PhysicalEvidence />}
                />
                <Route path="/branding" element={<Branding />} />
                <Route
                  path="/branding/history"
                  element={<HistoryOfBranding />}
                />
                <Route path="/branding/definition" element={<Definition />} />
                <Route
                  path="/branding/characteristics"
                  element={<CharacteristicsOfGoodBrand />}
                />
                <Route
                  path="/marketing-research"
                  element={<MarketingResearch />}
                />
                <Route
                  path="/marketing-research/reasons-to-conduct"
                  element={<ReasonsToConductResearch />}
                />
                <Route
                  path="/marketing-research/guide-to-conduct"
                  element={<GuideToConduct />}
                />
                <Route
                  path="/marketing-research/need-and-importance"
                  element={<NeedAndImportance />}
                />
                <Route path="/quiz/:questionId" element={<Quiz />} />
                <Route path="/quiz/results" element={<QuizResults />} />
              </Routes>
              {showNextPrevButtons && <NextPrevButtons routes={routes} />}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
