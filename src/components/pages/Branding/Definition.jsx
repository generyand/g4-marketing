import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Brand from "../../../assets/branding/brand.webp";
import BrandName from "../../../assets/branding/brand-name.webp";
import TradeMark from "../../../assets/branding/trademark.webp";
import ServiceMark from "../../../assets/branding/service-mark.webp";
import { motion } from "framer-motion";

const brandingData = [
  {
    title: "Brand",
    image: Brand,
    description:
      "A brand combines dimensions that differentiate the offering in some way from other offerings designed to meet a similar need. These variations may be functional, rational, or tangible- related to the brand's product performance. They may also be more symbolic, emotional, or intangible-related to what the brand represents.",
  },
  {
    title: "Brand Name",
    image: BrandName,
    description:
      "The brand name has a narrow meaning. A brand name is a word, letter, or a group of words or letters. Well organized brands make shopping easier. Many customers are willing to buy new things. But they like to buy a sure thing the next time. Brand names connect a product with the benefits a customer can expect. The connection may be learned from the past consumer experience, from the company's promotion, or other advertising strategies.",
  },
  {
    title: "Trade Mark",
    image: TradeMark,
    description:
      "Trademark is a legal term. A trademark includes only those words, symbols, or marks that are legally registered for use by a single company.",
  },
  {
    title: "Service Mark",
    image: ServiceMark,
    description:
      "A service mark is the same as a trademark except that it refers to a service offering.",
  },
  // Add more objects here for additional branding elements
];

const Definition = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Definition of Branding</SubTopicTitle>
      <p className="mb-6 md:mb-8">
        According to Canon, Perrault and McCarthy, branding means "the use of a
        name, term, symbol or design or a combination of these, to identify a
        product." It encompasses the use of brand names, trademarks, and
        practically all other means of product identification.
      </p>

      {brandingData.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={index}
          className="flex flex-col mb-8 md:mb-12"
        >
          <h2 className="mb-4 text-xl font-bold md:text-3xl">{item.title}</h2>
          <div className="flex flex-col gap-2 p-4 bg-blue-100 border border-blue-300 rounded-lg bg-opacity-30 backdrop-blur-sm dark:bg-gray-800 md:gap-8 sm:p-6 sm:items-start lg:flex-row">
            <img
              src={item.image}
              alt={`${item.title} illustration`}
              className="mx-auto mb-4 text-xs sm:mx-0 sm:w-64 sm:mb-0"
              style={{ width: "clamp(160px, 20%, 200px)" }}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <p className="self-center font-light text-gray-800 dark:text-white">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </SubTopicContainer>
  );
};

export default Definition;
