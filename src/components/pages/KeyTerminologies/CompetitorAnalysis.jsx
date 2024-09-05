import React from "react";
import { motion } from "framer-motion";
import Competitors from "../../../assets/keyterminologies/competitors-image.png";
import Competitors2 from "../../../assets/keyterminologies/competitors2-image.png";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";

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
        <span className="font-bold text-blue-500">Competitor analysis</span> is
        the process of identifying and evaluating the strengths, weaknesses,
        strategies, and market positions of businesses that compete in the same
        industry. It helps companies understand the competitive landscape,
        identify opportunities for differentiation, and make informed decisions
        to gain a competitive advantage.
      </motion.p>

      <div className="">
        <motion.img
          src={Competitors}
          alt="Competitors Illustration"
          className="hidden mx-auto md:block"
          style={{ width: "clamp(200px, 100%, 540px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.img
          src={Competitors2}
          alt="Competitors Illustration 2"
          className="mx-auto md:hidden"
          style={{ width: "clamp(200px, 100%, 540px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>
    </SubTopicContainer>
  );
};

export default CompetitorAnalysis;
