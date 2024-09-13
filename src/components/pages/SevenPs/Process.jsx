import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";

const Process = () => {
  return (
    <SubTopicContainer className="p-4">
      <SubTopicTitle>6. Process</SubTopicTitle>
      <p className="mb-4 md:mb-8">
        Production of a product can be standardized, customized, and
        personalized, or both. The process of production can involve
        steps/procedures that require precision and standard measures of inputs
        to produce the desired quality and quantity of the product.
      </p>
      <p className="mb-4 md:mb-8">
        However, since service provision needs to strike a balance between
        customization and standardization, the processes involved in the
        activity require special mention and attention. A process needs to be
        clearly defined for the service delivery to every customer, at any time
        of day, on any day. Within this process, there should be defined areas
        where a customer preference can be accommodated to{" "}
      </p>
    </SubTopicContainer>
  );
};

export default Process;
