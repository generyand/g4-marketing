import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Highlight from "../../ui/Highlight";

const GuideToConduct = () => {
  return (
    <SubTopicContainer className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <SubTopicTitle className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-100">Guide to Conduct Marketing Research</SubTopicTitle>
      <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
        According to the Guide to Market Research and Analysis (2015), market
        research requires setting clear goals, determining what needs to be
        known, and why. A strategy is then developed, and data is gathered
        through <Highlight className="font-semibold text-blue-600 dark:text-blue-400">Primary</Highlight> or{" "}
        <Highlight className="font-semibold text-blue-600 dark:text-blue-400">Secondary</Highlight> Research methods.
      </p>

      <div className="mb-8">
        <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100 md:text-3xl">
          <Highlight className="text-blue-600 dark:text-blue-400">Primary Research</Highlight>
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Primary research involves gathering information directly from respondents
          through various methods:
        </p>
        <ul className="pl-6 space-y-2 text-gray-700 list-disc dark:text-gray-300">
          <li><span className="font-semibold">Surveys:</span> Conducted via mail, phone, internet (e.g., Google Forms), face-to-face, or web (e.g., Skype, Viber).</li>
          <li><span className="font-semibold">Focus Group Discussions:</span> Moderated group interviews providing insights into user needs and behaviors.</li>
          <li><span className="font-semibold">Personal Interviews:</span> Traditional face-to-face interviews exploring customer perceptions and behaviors.</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100 md:text-3xl">
          <Highlight className="text-blue-600 dark:text-blue-400">Secondary Research</Highlight>
        </h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Secondary research utilizes existing resources such as company records,
          databases, media reports, internet searches, and official statistics
          (e.g., NEDA, DTI, PSA). It is generally less time-consuming and costly
          than primary research while often addressing the same business issues.
        </p>
      </div>
    </SubTopicContainer>
  );
};

export default GuideToConduct;
