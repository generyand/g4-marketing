import React from "react";
import { motion } from "framer-motion";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import ProductServicePlanImage1 from "../../../assets/keyterminologies/product-service-plan-1.webp";
import ProductServicePlanImage2 from "../../../assets/keyterminologies/product-service-plan-2.webp";

const ProductServicePlan = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Product/Service Plan</SubTopicTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        This is the part of your business plan where you will describe the
        specific products or services you're going to offer. You'll fully
        explain the concept for your business, along with all aspects of
        purchasing, manufacturing, packaging, and distribution.
      </motion.p>

      <div className="flex flex-col flex-wrap items-center justify-around gap-8 mx-auto md:flex-row">
        <motion.img
          src={ProductServicePlanImage1}
          alt="Competitors Illustration"
          // className="hidden mx-auto md:block"
          style={{ width: "clamp(120px, 70%, 320px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.img
          src={ProductServicePlanImage2}
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

export default ProductServicePlan;
