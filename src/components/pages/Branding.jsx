import React from "react";
import MainTopicContainer from "../ui/MainTopicContainer";
import MainTopicTitle from "../ui/MainTopicTitle";
import BrandingImage from "../../assets/branding/branding.webp";
import Highlight from "../ui/Highlight";

function Branding() {
  return (
    <MainTopicContainer>
      <MainTopicTitle>Branding</MainTopicTitle>
      {/* Content goes here */}
      <img
        src={BrandingImage}
        alt=""
        className="mx-auto mt-8 md:my-4 md:block"
        style={{ width: "clamp(200px, 80%, 360px)" }}
        loading="lazy"
        decoding="async"
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.5, delay: 0.3 }}
      />
      <p>
        <Highlight>Branding</Highlight> is the process of creating a unique identity for a product,
        service, or company. It involves developing visual elements to create a
        memorable image that distinguishes the brand from competitors.
        from its competitors.
      </p>
    </MainTopicContainer>
  );
}

export default Branding;