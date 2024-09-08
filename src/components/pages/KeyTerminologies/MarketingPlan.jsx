import React from "react";
import { motion } from "framer-motion";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import MarketingPlanImage1 from "../../../assets/keyterminologies/marketing-plan-1.webp";
import MarketingPlanImage2 from "../../../assets/keyterminologies/marketing-plan-2.webp";

const MarketingPlan = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Marketing Plan</SubTopicTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        This is the part of your business plan where you will describe the
        marketing strategies you're going to use to promote your business.
        You'll explain how you're going to reach your target customers, how
        you're going to differentiate your business from competitors, and how
        you're going to measure the success of your marketing efforts.
      </motion.p>
      <div className="flex flex-col flex-wrap items-center justify-around gap-8 mx-auto md:flex-row">
        <motion.img
          src={MarketingPlanImage1}
          alt="Competitors Illustration"
          className="hidden md:block"
          style={{ width: "clamp(120px, 70%, 320px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.img
          src={MarketingPlanImage2}
          alt="Competitors Illustration 2"
          // className="mx-auto md:hidden"
          style={{ width: "clamp(120px, 70%, 320px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
    </SubTopicContainer>
  );
};

export default MarketingPlan;
