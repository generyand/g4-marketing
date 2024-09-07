import React from "react";
import { motion, useInView } from "framer-motion";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Highlight from "../../ui/Highlight";
import History from "../../../assets/keyterminologies/history.png";
import ManagementTeam from "../../../assets/keyterminologies/management-team.png";
import Location from "../../../assets/keyterminologies/location.png"; // Location
import MissionStatement from "../../../assets/keyterminologies/mission-statement.png"; // Mission Statement
import LegalStructure from "../../../assets/keyterminologies/legal-structure.png"; // Legal Structure

const data = [
  {
    title: "History",
    image: History,
  },
  {
    title: "Management Team",
    image: ManagementTeam,
  },
  {
    title: "Location",
    image: Location,
  },
  {
    title: "Mission Statement",
    image: MissionStatement,
  },
  {
    title: "Legal Structure",
    image: LegalStructure,
  },
];

const CompanyOverview = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Company Overview</SubTopicTitle>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4"
      >
        <Highlight>Company Overview</Highlight> is an essential part of a
        business plan (also known as company information or a company summary).
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-8 sm:mb-12 md:mb-16"
      >
        It's an overview of the most important points about your company, which
        includes your:
      </motion.p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {data.map((item) => (
          <MotionCard key={item.title} item={item} />
        ))}
      </div>
    </SubTopicContainer>
  );
};

const MotionCard = ({ item }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="px-2 py-4 text-center bg-blue-500 rounded-md md:py-8 backdrop-blur-md bg-opacity-35"
    >
      <img
        src={item.image}
        alt={item.title}
        className="px-12 mx-auto mb-4"
        style={{ width: "clamp(120px, 70vw, 240px)" }}
        loading="lazy"
        decoding="async"
      />
      <p className="text-sm md:text-base lg:text-lg">{item.title}</p>
    </motion.div>
  );
};

export default CompanyOverview;
