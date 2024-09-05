import React from "react";
import { motion } from "framer-motion";
import TeslaLogo from "../../../assets/keyterminologies/tesla-logo.png";

const MarketingStrategyBusinessPlan = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-12 sm:text-lg md:text-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-2xl font-bold md:text-4xl"
      >
        Marketing Strategy Business Plan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        A{" "}
        <span className="font-bold text-blue-500">
          Marketing Strategy Business Plan
        </span>{" "}
        is a document that outlines a company’s business goals and the marketing
        approach to attract and engage customers, aligning marketing efforts
        with overall business objectives for long-term success.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-2"
      >
        <p className="mb-2 font-bold">An Example of a Marketing Strategy:</p>
        <div className="flex flex-col items-center p-4 bg-blue-200 rounded-lg sm:p-8 md:p-12 sm:items-start dark:bg-blue-100 lg:flex-row">
          <motion.img
            src={TeslaLogo}
            alt="Tesla Logo"
            className="mx-auto mb-4 w-1/2 sm:w-64 sm:mb-0"
            style={{ width: "clamp(100px, 50%, 200px)" }}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <p className="text-base text-black sm:text-lg md:text-xl"> 
            Tesla's marketing strategy focuses on innovation, sustainability,
            and premium electric vehicles. Their business plan began by
            targeting high-end cars to build a luxury brand, later funding more
            affordable models like the Model 3. This combination of a strong
            marketing strategy and scalable business plan has made Tesla a
            leader in the electric vehicle market.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingStrategyBusinessPlan;
