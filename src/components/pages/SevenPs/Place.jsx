import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import ProductImage from "../../../assets/sevenps/place-product.webp";
import ServiceImage from "../../../assets/sevenps/place-service.webp";

const Place = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>3. Place</SubTopicTitle>
      <div className="flex flex-col gap-2 justify-center items-center p-4 mb-12 rounded-lg md:gap-8 md:mb-0 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={ProductImage}
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
          The product is not necessarily produced and consumed in the same
          place. The place of production or the plant site can be different from
          the place of distribution or selling. 
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center p-4 mb-12 rounded-lg md:gap-8 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={ServiceImage}
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
          Conversely, the service is produced and consumed in the same place. It
          cannot be owned and taken away from the location. This is why the
          place at which this transaction occurs is of vital importance. The
          location of the service provision is carefully analyzed to allow ease
          of access and the desire to make an effort to reach it. 
        </p>
      </div>
      <p className="p-4 bg-blue-200 rounded-lg dark:bg-blue-100 md:p-12 dark:text-gray-800">
        Fast food restaurants and sales service centers may be located in busy
        main streets to allow walk-in customers, while a fine dining restaurant
        may be located in a quiet street to maintain exclusivity and privacy.
      </p>
    </SubTopicContainer>
  );
};

export default Place;
