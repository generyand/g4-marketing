import React from "react";
import LivePlanLogo from "../../../assets/keyterminologies/liveplan-logo.png";

const MarketingStrategyBusinessPlan = () => {
  return (
    <div className="p-4 sm:p-8 md:p-12">
      <h1 className="mb-4 text-2xl font-bold">
        Marketing Strategy Business Plan
      </h1>
      <p className="mb-8">
        Today’s market makes it extremely difficult for small business owners to
        attract and retain those skills.
      </p>
      <p className="mb-2 font-bold">An Example of a Marketing Strategy:</p>
      <div className="flex flex-col items-center p-4 rounded-lg sm:items-start bg-violet-200 sm:flex-row">
        <img
          src={LivePlanLogo}
          alt="LivePlan Logo"
          className="w-1/2 mb-4 sm:w-64 sm:mb-0"
        />
        <p className="text-base sm:text-lg md:text-xl">
          “LivePlan is incredibly simple and easy to use. The financial sales
          forecasting tool is very intuitive and makes writing a business plan
          more fun”.
        </p>
      </div>
    </div>
  );
};

export default MarketingStrategyBusinessPlan;
