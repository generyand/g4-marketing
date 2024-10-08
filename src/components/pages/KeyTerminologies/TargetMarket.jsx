import React from "react";
import { motion } from "framer-motion";

import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Highlight from "../../ui/Highlight";
import TargetMarket1 from "../../../assets/keyterminologies/target-market-1.webp";
import TargetMarket2 from "../../../assets/keyterminologies/target-market-2.webp";

function TargetMarket() {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Target Market</SubTopicTitle>
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 mx-auto md:flex-row">
        <motion.img
          src={TargetMarket1}
          alt="Target Market Illustration"
          style={{ width: "clamp(150px, 75vw, 280px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.img
          src={TargetMarket2}
          alt="Target Market Illustration 2"
          className="hidden md:block"
          style={{ width: "clamp(200px, 75vw, 280px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        A <Highlight>target market</Highlight> is a group of customers within a
        business's serviceable available market at which a business aims its
        marketing efforts and resources. It is a subset of the total market for
        a product or service.
      </motion.p>
    </SubTopicContainer>
  );
}

export default TargetMarket;
