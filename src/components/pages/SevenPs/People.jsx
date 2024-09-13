import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import PeopleImage from "../../../assets/sevenps/company-people.webp";
import AngryWaiter from "../../../assets/sevenps/angry-waiter.webp";

const People = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>5. People</SubTopicTitle>
      <img
        src={PeopleImage}
        alt="People Image"
        className="mx-auto mt-4 mb-4 md:block"
        style={{ width: "clamp(200px, 80%, 300px)" }}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
      <p className="mb-4 md:mb-8">
        In the production of a product, the people needed to do the tasks are
        not directly dealing with the customers so that customer service
        training is not a priority, but production-related training is.{" "}
      </p>
      <p className="mb-8 md:mb-12">
        People element is vitally important in the service marketing mix. When a
        service is being delivered, the person delivering it is not unique from
        the service itself.
      </p>

      <div className="flex flex-col items-center justify-center gap-2 p-4 mb-12 bg-blue-200 rounded-lg md:gap-8 md:mb-0 sm:items-start lg:flex-row dark:bg-blue-100 dark:text-gray-800">
        <img
          src={AngryWaiter}
          alt="Picture"
          className="w-1/2 mx-auto mb-4 rounded-md sm:w-64 sm:mb-0"
          style={{ width: "clamp(100px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          When dining at a restaurant, if a rude waiter is encountered, the
          entire experience will be labeled as bad service. This is why many
          businesses invest in defining the right kind of a person to fill their
          service role and then making efforts to find or train people to fit
          this definition.
        </p>
      </div>
    </SubTopicContainer>
  );
};

export default People;
