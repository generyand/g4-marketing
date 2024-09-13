import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";

const People = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>5. People</SubTopicTitle>
      <p className="mb-4 md:mb-8">
        In the production of a product, the people needed to do the tasks are
        not directly dealing with the customers so that customer service
        training is not a priority, but production-related training is.{" "}
      </p>
      <p className="mb-4 md:mb-8">
        People element is vitally important in the service marketing mix. When a
        service is being delivered, the person delivering it is not unique from
        the service itself.
      </p>
      <p>
        When dining at a restaurant, if a rude waiter is encountered, the entire
        experience will be labeled as bad service. This is why many businesses
        invest in defining the right kind of a person to fill their service role
        and then making efforts to find or train people to fit this definition.
      </p>
    </SubTopicContainer>
  );
};

export default People;
