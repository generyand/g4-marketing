import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiFramer, SiFigma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
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

const TECHNOLOGIES = [
  {
    name: "ReactJS",
    description: "A powerful JavaScript library for building user interfaces",
    icon: FaReact,
  },
  {
    name: "TailwindCSS",
    description: "A utility-first CSS framework for rapid UI development",
    icon: RiTailwindCssFill,
  },
  {
    name: "Framer Motion",
    description:
      "A production-ready motion library for React to create smooth animations",
    icon: SiFramer,
  },
  // { name: 'Lottie', description: 'A library for adding high-quality animations to web and mobile projects', icon: SiLottie },
  {
    name: "Figma",
    description:
      "A collaborative interface design tool used for creating the website layout",
    icon: SiFigma,
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

const TechnologyCard = ({ name, description, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-4 bg-white rounded-lg shadow-md md:p-4 dark:bg-gray-800"
  >
    <div className="flex flex-col items-center text-center">
      <div className="p-4 mb-4 bg-blue-100 rounded-full dark:bg-blue-900">
        <Icon className="w-8 h-8 text-blue-500 dark:text-blue-300" />
      </div>
      <h4 className="mb-1 text-base font-semibold text-gray-800 md:text-xl dark:text-gray-200">
        {name}
      </h4>
      <p className="text-xs text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

function AboutUs() {
  return (
    <SubTopicContainer>
      <div className="max-w-4xl mx-auto">
        <SubTopicTitle>About Us</SubTopicTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-gray-700 dark:text-gray-300 sm:text-xl"
        >
          Welcome to our Marketing Plan presentation website! Created as part of
          our entrepreneurship course, this presentation explores the vital role
          of a marketing plan in business success. We provide insights into key
          marketing concepts, including the 7P's, branding, and market research,
          to show how companies can compete effectively.
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
        <div className="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-2">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-1 text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          Technologies
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-gray-700 md:mb-6 dark:text-gray-300 sm:text-lg"
        >
          Our website is built using cutting-edge technologies to ensure a
          smooth, interactive, and visually appealing user experience:
        </motion.p>
        <div className="grid grid-cols-2 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGIES.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </SubTopicContainer>
  );
}

export default AboutUs;
