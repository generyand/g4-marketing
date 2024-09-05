import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import NextPrevButtons from "./components/ui/NextPrevButtons";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import KeyTerminologies from "./components/pages/KeyTerminologies";
import MarketingStrategyBusinessPlan from "./components/pages/KeyTerminologies/MarketingStrategyBusinessPlan";
import CompetitorAnalysis from "./components/pages/KeyTerminologies/CompetitorAnalysis";
import CompanyOverview from "./components/pages/KeyTerminologies/CompanyOverview";
import ProductServicePlan from "./components/pages/KeyTerminologies/ProductServicePlan";
import MarketingPlan from "./components/pages/KeyTerminologies/MarketingPlan";
import SevenPs from "./components/pages/SevenPs";
import Product from "./components/pages/SevenPs/Product";
import Pricing from "./components/pages/SevenPs/Pricing";
import Place from "./components/pages/SevenPs/Place";
import Promotion from "./components/pages/SevenPs/Promotion";
import People from "./components/pages/SevenPs/People";
import Process from "./components/pages/SevenPs/Process";
import PhysicalEvidence from "./components/pages/SevenPs/PhysicalEvidence";
import Branding from "./components/pages/Branding";
import HistoryOfBranding from "./components/pages/Branding/HistoryOfBranding";
import Definition from "./components/pages/Branding/Definition";
import CharacteristicsOfGoodBrand from "./components/pages/Branding/CharacteristicsOfGoodBrand";
import { ThemeProvider } from "./context/ThemeContext";
import MarketingResearch from "./components/pages/MarketingResearch";
import ReasonsToConductResearch from "./components/pages/MarketingResearch/ReasonsToConductResearch";
import GuideToConduct from "./components/pages/MarketingResearch/GuideToConduct";
import NeedAndImportance from "./components/pages/MarketingResearch/NeedAndImportance";
import MarketAnalysis from "./components/pages/MarketingResearch/MarketAnalysis";

function App() {
  const location = useLocation();
  const showSidebar =
    location.pathname !== "/" && location.pathname !== "/about";

  const routes = [
    "/key-terminologies",
    "/key-terminologies/marketing-strategy-business-plan",
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
    "/marketing-research/market-analysis",
  ];

  const showNextPrevButtons = !["/", "/about"].includes(location.pathname);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen font-sans bg-gray-100 dark:bg-gray-900 dark:text-white text-neutral-800">
        <Header />
        <div className="flex relative flex-grow">
          {showSidebar && <Sidebar />}
          <main
            className={`flex-grow overflow-y-auto ${
              showSidebar ? "sm:ml-[16rem]" : ""}`}
          >
            <div className="container mx-auto mb-4 sm:mb-8 md:mb-12">
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
                <Route
                  path="/marketing-research/market-analysis"
                  element={<MarketAnalysis />}
                />
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
