import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import ProductImage from "../../../assets/sevenps/phys-evidence-product.webp";
import ServiceImage from "../../../assets/sevenps/phys-evidence-service.webp";

const PhysicalEvidence = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>7. Physical Evidence</SubTopicTitle>
      <div className="flex flex-col gap-2 justify-center items-center mb-12 rounded-lg md:gap-8 md:mb-0 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={ProductImage}
          alt="Picture"
          className="mx-auto mb-4 w-1/2 sm:w-64 sm:mb-0"
          style={{ width: "clamp(160px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          With a product, the location of the manufacturing site or plant site
          is dependent on the availability and accessibility of materials,
          manpower, machinery, nature of the product, and the target market.
        </p>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center rounded-lg md:gap-8 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={ServiceImage}
          alt="Picture"
          className="mx-auto mb-4 w-1/2 sm:w-64 sm:mb-0"
          style={{ width: "clamp(160px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          With service, the location of the service delivery also takes place
          significance. The level of comfort and attractiveness of a service
          location may make a lot of difference to the user experience. A calm
          and soothing environment with thoughtful comfort measures may provide
          a sense of security to a new customer, which will make them return.
        </p>
      </div>
    </SubTopicContainer>
  );
};

export default PhysicalEvidence;
