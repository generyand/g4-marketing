import React from "react";
import MainTopicContainer from "../ui/MainTopicContainer";
import MainTopicTitle from "../ui/MainTopicTitle";
import Highlight from "../ui/Highlight";
import MarketResearchImage from "../../assets/marketresearch/market-research.webp";

function MarketingResearch() {
  return (
    <MainTopicContainer>
      <MainTopicTitle>Marketing Research</MainTopicTitle>
      {/* Content goes here */}
      <img
        src={MarketResearchImage}
        alt="Market Research"
        className="mx-auto my-2 md:block"
        style={{ width: "clamp(200px, 90%, 360px)" }}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <p className="mb-4 md:mb-8">
        <Highlight>Market research</Highlight> involves gathering information to
        understand how potential customers will react to a company's products or
        services. It helps entrepreneurs make informed decisions on start-up,
        growth, and the 7Ps, ensuring choices are based on data rather than
        intuition.
      </p>
    </MainTopicContainer>
  );
}

export default MarketingResearch;
