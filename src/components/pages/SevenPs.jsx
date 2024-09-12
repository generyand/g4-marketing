import React from "react";
import { motion } from "framer-motion";

import MainTopicContainer from "../ui/MainTopicContainer";
import MainTopicTitle from "../ui/MainTopicTitle";
import SubTopicTitle from "../ui/SubTopicTitle";
import Highlight from "../ui/Highlight";

import Product from "../../assets/sevenps/product.webp";
import Price from "../../assets/sevenps/price.webp";
import Place from "../../assets/sevenps/place.webp";
import Promotion from "../../assets/sevenps/promotion.webp";
import People from "../../assets/sevenps/people.webp";
import Process from "../../assets/sevenps/process.webp";
import PhysicalEvidence from "../../assets/sevenps/physical-evidence.webp";

function SevenPs() {
  const data = [
    {
      title: "Product",
      image: Product,
    },
    {
      title: "Price",
      image: Price,
    },
    {
      title: "Place",
      image: Place,
    },
    {
      title: "Promotion",
      image: Promotion,
    },
    {
      title: "People",
      image: People,
    },
    {
      title: "Process",
      image: Process,
    },
    {
      title: "Physical Evidence",
      image: PhysicalEvidence,
    },
  ];

  return (
    <MainTopicContainer>
      <MainTopicTitle>The 7P's of Marketing</MainTopicTitle>
      {/* Content goes here */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-4 mb-8 text-center text-gray-800 bg-blue-200 rounded-lg md:p-8"
      >
        "Everything matters with marketing, and that broad, integrated
        perspective is often necessary."
      </motion.p>
      <SubTopicTitle>Traditional Marketing Mix</SubTopicTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 md:mb-8"
      >
        The <Highlight>traditional marketing mix</Highlight> elements have
        enjoyed tremendous popularity over the years in an era where most
        businesses sold products. These elements of 4P’s consisted of:
      </motion.p>
      <div className="grid grid-cols-2 gap-4 mb-8 md:mb-16 md:gap-8 md:grid-cols-4">
        {data.slice(0, 4).map((item) => (
          <MotionCard key={item.title} item={item} />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        In 1981, <Highlight>Booms</Highlight> and <Highlight>Bitner</Highlight>{" "}
        extended the marketing mix by three new Ps, these new elements are:
      </motion.p>
      <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3">
        {data.slice(4, 8).map((item) => (
          <MotionCard key={item.title} item={item} />
        ))}
      </div>
    </MainTopicContainer>
  );
}

const MotionCard = ({ item }) => {
  const ref = React.useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-2 py-4 text-center rounded-md md:py-8"
    >
      <img
        src={item.image}
        alt={item.title}
        className="px-12 mx-auto mb-4 text-xs"
        style={{ width: "clamp(120px, 70vw, 240px)" }}
        loading="lazy"
        decoding="async"
      />
      <p className="text-sm md:text-base lg:text-lg">{item.title}</p>
    </motion.div>
  );
};

export default SevenPs;
