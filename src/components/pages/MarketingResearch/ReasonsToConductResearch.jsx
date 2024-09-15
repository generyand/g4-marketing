import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import { motion } from "framer-motion";

const researchReasons = [
  {
    title: "Identify potential customers",
    description:
      "Understand who will use your product/service, including demographics like age, gender, marital status, location, and education level.",
  },
  {
    title: "Understanding existing customers",
    description:
      "Learn why customers choose your product over competitors, what they value, who influences their buying decisions, and their interests and habits.",
  },
  {
    title: "Set realistic targets",
    description:
      "Use collected information to set achievable goals for growth, sales, and new product/service introductions.",
  },
  {
    title: "Develop effective strategies",
    description:
      "Make informed marketing decisions about pricing, distribution, media channels, and product/service development based on research findings.",
  },
  {
    title: "Examine and solve business problems",
    description:
      "Identify the root causes of business issues, such as falling sales, decreased brand awareness, or new market competition.",
  },
  {
    title: "Prepare for business expansion",
    description:
      "Identify areas for expansion, test market readiness for new products/services, and determine optimal locations for new ventures.",
  },
  {
    title: "Identify business opportunities",
    description:
      "Discover unserved or under-serviced markets, and recognize changing market trends that may bring new opportunities.",
  },
];

const ReasonsToConductResearch = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Reasons to Conduct Marketing Research</SubTopicTitle>
      <p className="mb-4 md:mb-8">
        Market research is essential for every business and should be ongoing to
        stay competitive. Whether starting or expanding, it helps entrepreneurs
        understand their target market and boost sales.
      </p>
      <p className="mb-6 md:mb-8">
        Today, business owners conduct market research for various reasons,
        including:
      </p>

      {researchReasons.map((reason, index) => (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        key={index} className="flex flex-col mb-8 md:mb-12">
          <h2 className="mb-2 text-lg font-bold md:mb-3 md:text-2xl">
            {reason.title}
          </h2>
          <div className="p-4 bg-blue-100 border border-blue-300 rounded-lg bg-opacity-30 backdrop-blur-sm dark:bg-gray-800 sm:p-6">
            <p className="text-gray-800 dark:text-white">
              {reason.description}
            </p>
          </div>
        </motion.div>
      ))}
    </SubTopicContainer>
  );
};

export default ReasonsToConductResearch;
