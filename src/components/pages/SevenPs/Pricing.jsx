import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import PricingPlan from "../../../assets/sevenps/pricing-plan.webp";

const Pricing = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>2. Pricing</SubTopicTitle>
      <p>
        With a product, producing the materials that go with it can be measured,
        and its actual tangible cost production is also measurable. Therefore,
        it is not that difficult to put a price tag on it.
      </p>
      <img
        src={PricingPlan}
        alt="Pricing Plan"
        className="mx-auto md:my-2 md:block"
        style={{ width: "clamp(200px, 100%, 360px)" }}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <p>
        A service however, cannot be measured by what materials go into its
        creation nor is the actual tangible cost of production measurable, it
        can be challenging to put a price tag on it. There are some tangibles,
        of course, such as labor costs and overheads. But additionally, the
        ambiance, the experience, and the brand name also factor into the final
        price offering.
      </p>
    </SubTopicContainer>
  );
};

export default Pricing;
