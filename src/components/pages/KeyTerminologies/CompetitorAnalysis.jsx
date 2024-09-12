import React from "react";
import { motion } from "framer-motion";
import Competitors from "../../../assets/keyterminologies/competitors-image.webp";
import Competitors2 from "../../../assets/keyterminologies/competitors2-image.webp";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Highlight from "../../ui/Highlight";

const CompetitorAnalysis = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Competitor Analysis</SubTopicTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex flex-col flex-wrap items-center justify-center gap-8 mx-auto md:flex-row">
          <motion.img
            src={Competitors}
            alt="Competitors Illustration"
            className="mx-auto my-4 md:my-8 md:block"
            style={{ width: "clamp(200px, 100%, 540px)" }}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {/* <motion.img
            src={Competitors2}
            alt="Competitors Illustration 2"
            className="mx-auto md:hidden"
            style={{ width: "clamp(200px, 80%, 540px)" }}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          /> */}
        </div>
        <Highlight>Competitor analysis</Highlight> is the process of identifying
        and evaluating the strengths, weaknesses, strategies, and market
        positions of businesses that compete in the same industry. It helps
        companies understand the competitive landscape, identify opportunities
        for differentiation, and make informed decisions to gain a competitive
        advantage.
      </motion.p>
    </SubTopicContainer>
  );
};

export default CompetitorAnalysis;
