import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import PromotionImage from "../../../assets/sevenps/promotion2.webp";

const Promotion = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>4. Promotion</SubTopicTitle>
      <div className="flex flex-col gap-2 justify-center items-center mb-12 rounded-lg md:gap-8 md:mb-0 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={PromotionImage}
          alt="Picture"
          className="mx-auto mb-4 w-1/2 sm:w-64 sm:mb-0"
          style={{ width: "clamp(100px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          It fulfills the same role as it does in any other marketing context.
          Service may be more easily replicated than a physical product. To
          prevent a service from becoming interchangeable with its competitors,
          it becomes vital to create a desirable brand image and name in the
          market.
        </p>
      </div>
      <p className="p-4 bg-blue-200 rounded-lg dark:bg-blue-100 md:p-12 dark:text-gray-800">
        Differentiation becomes a key goal in order to attract both new and
        repeat customers.
      </p>
    </SubTopicContainer>
  );
};

export default Promotion;
