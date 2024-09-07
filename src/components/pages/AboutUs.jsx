import React from "react";
import { motion } from "framer-motion";
import SubTopicContainer from "../ui/SubTopicContainer";
import SubTopicTitle from "../ui/SubTopicTitle";

const TEAM_MEMBERS = [
  {
    name: "Gene Ryan Depalubos",
    role: "Developer and Team Leader",
    contribution:
      "Gene Ryan led the team and developed the website, ensuring the technical aspects of the presentation were seamless and interactive.",
  },
  {
    name: "Fernyl Jean Maningo",
    role: "Designer",
    contribution:
      "Fernyl crafted the visual design of the website, focusing on user experience and aesthetic appeal to make the content engaging.",
  },
  {
    name: "Rogene Carl Rosalijos",
    role: "Content Writer",
    contribution:
      "Rogene contributed to the written content, ensuring clear and concise explanations of key marketing concepts and strategies.",
  },
  {
    name: "Vincent Ace Rivera",
    role: "Content Writer",
    contribution:
      "Vincent played a key role in developing the written material, helping to explain complex terms and ideas in an easy-to-understand format.",
  },
  {
    name: "Asnari Pacalna",
    role: "Content Writer",
    contribution:
      "Asnari worked on producing the content, focusing on making the information accurate and informative for the audience.",
  },
];

const TeamMember = ({ name, role, contribution }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    // animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-4 transition-colors duration-200 bg-white rounded-lg shadow-md dark:bg-gray-800"
  >
    <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
      {name}
    </h4>
    <p className="mb-2 text-sm font-medium text-blue-600 sm:text-base dark:text-blue-400">
      {role}
    </p>
    <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
      {contribution}
    </p>
  </motion.div>
);

function AboutUs() {
  return (
    <SubTopicContainer>
      <div className="max-w-3xl mx-auto">
        <SubTopicTitle>About Us</SubTopicTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-gray-700 dark:text-gray-300 sm:text-xl"
        >
          Welcome to our Marketing Plan presentation website! This presentation
          was created as part of our entrepreneurship course to explore the
          critical role of a well-structured marketing plan in business success.
          Through this presentation, we aim to provide insights into key
          marketing concepts, strategies, and how companies can leverage them to
          compete effectively in the marketplace. Our goal is to offer a clear
          understanding of the 7P's of marketing, branding, and the importance
          of market research, all presented in a dynamic and interactive way.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          Our Team
        </motion.h3>
        <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-2">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </SubTopicContainer>
  );
}

export default AboutUs;
