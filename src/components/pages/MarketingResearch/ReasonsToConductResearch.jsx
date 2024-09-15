import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Highlight from "../../ui/Highlight";

const ReasonsToConductResearch = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Reasons to Conduct Marketing Research</SubTopicTitle>
      <p className="mb-4 md:mb-8">
        Market research is essential for every business and should be ongoing to
        stay competitive. Whether starting or expanding, it helps entrepreneurs
        understand their target market and boost sales.
      </p>
      <p className="mb-4 md:mb-8">
        Today, business owners conduct market research for a lot of reasons,
        such as the following:
      </p>
      <ul>
        <li>
          <Highlight>
            Understand the market:{" "}
          </Highlight>
          Market research helps entrepreneurs understand the market they are
          operating in.
        </li>
      </ul>
    </SubTopicContainer>
  );
};

export default ReasonsToConductResearch;
