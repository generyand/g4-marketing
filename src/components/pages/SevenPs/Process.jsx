import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import ProcessImage1 from "../../../assets/sevenps/process-1.webp";
import ProcessImage2 from "../../../assets/sevenps/process-2.webp";
import ProcessImage3 from "../../../assets/sevenps/process-3.webp";

const Process = () => {
  return (
    <SubTopicContainer className="p-4">
      <SubTopicTitle>6. Process</SubTopicTitle>
      <div className="flex flex-col flex-wrap gap-8 justify-around items-center mx-auto md:flex-row md:mb-8">
        <img
          src={ProcessImage1}
          alt="1"
          // className="hidden md:block"
          style={{ width: "clamp(120px, 70%, 320px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <img
          src={ProcessImage2}
          alt="2"
          className="hidden md:block"
          style={{ width: "clamp(120px, 70%, 320px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>
      <p className="mb-4 md:mb-8">
        Production of a product can be standardized, customized, and
        personalized, or both. The process of production can involve
        steps/procedures that require precision and standard measures of inputs
        to produce the desired quality and quantity of the product.
      </p>
      <img
        src={ProcessImage3}
        alt="Process"
        className="mx-auto mt-8 md:my-4 md:block"
        style={{ width: "clamp(200px, 80%, 360px)" }}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <p className="mb-4 md:mb-8">
        However, since service provision needs to strike a balance between
        customization and standardization, the processes involved in the
        activity require special mention and attention. A process needs to be
        clearly defined for the service delivery to every customer, at any time
        of day, on any day. Within this process, there should be defined areas
        where a customer preference can be accommodated to provide a unique experience.
      </p>
    </SubTopicContainer>
  );
};

export default Process;
