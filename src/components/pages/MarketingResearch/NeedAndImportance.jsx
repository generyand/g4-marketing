import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import { motion } from "framer-motion";

const needAndImportanceData = [
  {
    title: "Identifying problem and opportunities in the market",
    description: "It helps in identifying new market opportunities for existing and new products. It provides information on market share, nature of competition, customer satisfaction levels, sales performances, and distribution channel. This helps the firms in solving problems.",
  },
  {
    title: "Formulating market strategies",
    description: "Today, markets are no longer local. They have become global. Manufacturers find it difficult to contact customers and control distribution channels. Competition is equally severe. The consumer needs are difficult to predict. Market segmentation is a complicated task in such wide markets. The marketing intelligence provided through marketing research not only helps in framing but also implementing the market strategies.",
  },
  {
    title: "Determining consumer needs and wants",
    description: "Marketing has become customer-centric. However, large-scale production needs intermediaries for mass distribution. Due to the prevalence of multi-channels of distribution, there is an information gap. Marketing research helps in collecting information on consumers from structured distribution research and helps in making marketing customer-oriented.",
  },
  {
    title: "For effective communication mix",
    description: "In an era of micro- rather than mass-marketing, communication plays a vital role. Marketing research uses promotional research to study media mix, advertising effectiveness, and integrated communication tools. Research on such aspects will help in promoting a company's product in the market effectively.",
  },
  {
    title: "Improving selling activities",
    description: "Marketing research is used to analyze and evaluate the performances of a company within a market. It also studies the effectiveness of a sales force. It helps in identifying sales territories. Such information helps the companies in identifying areas of shortcoming in sales. It also examines alternative methods for the distribution of goods.",
  },
  {
    title: "For sales forecasting",
    description: "The most challenging task for any production manager is to keep optimum levels of inventory. However, production is undertaken in anticipation of demand. Therefore, a scientific forecast of sales is required. Marketing research helps in sales forecasting by using market share method, salesforce estimate method, and jury method. This can also help in fixing sales quotas and marketing plans.",
  },
  {
    title: "To revitalize brands",
    description: "Marketing research is used to study and find out the existing brand position. It finds out the recall value of brands. It explores the possibilities of brand extension or prospects of changing existing brand names. The main purpose of marketing is to strengthen brand equity.",
  },
  {
    title: "To facilitate the smooth introduction of new products",
    description: "Marketing research helps in testing the new products in one or two markets on a small scale. This helps in finding out consumer responses to new products and develop a suitable marketing mix. It reveals the problems of the customers regarding new products. Thus, it controls the risk involved in introducing a new product.",
  },
  {
    title: "Determine export potentials",
    description: "The development of transport and communication has helped in globalization and digitalization of world trade. This has helped in boosting the growth of international markets. Marketing research helps in conducting a market survey for export. It collects information on the marketing environment prevailing in a country. By collecting data on consumers from different countries, it indicates export potentials.",
  },
  {
    title: "Managerial decision-making",
    description: "Marketing research plays a vital role in the decision-making processes by supplying relevant, up-to-date, and accurate data to the decision-makers. Managers need up-to-date information to access customer needs and wants, market situations, technological change, and extent of competition.",
  },
];

const NeedAndImportance = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Need and Importance of Marketing Research</SubTopicTitle>
      <p className="mb-6 md:mb-8">
        A marketer's key task is delivering the right product, at the right
        place, for the right price, to the right person. Additionally, ensuring
        customer satisfaction is crucial for loyalty, making marketing research
        essential.
      </p>

      {needAndImportanceData.map((item, index) => (
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        key={index} className="flex flex-col mb-8 md:mb-12">
          <h2 className="mb-2 text-xl font-bold md:text-3xl">{item.title}</h2>
          <div className="p-4 bg-blue-100 border border-blue-300 rounded-lg bg-opacity-30 backdrop-blur-sm dark:bg-gray-800 sm:p-6">
            <p className="text-gray-800 dark:text-white">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </SubTopicContainer>
  );
};

export default NeedAndImportance;
