import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";
import Highlight from "../../ui/Highlight";
import DavidOgilvy from "../../../assets/branding/david-ogilvy.webp";
import DictionaryOfBrand from "../../../assets/branding/brand-z.webp";
import MartyNeumeier from "../../../assets/branding/marty-neumeier.webp";

const HistoryOfBranding = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>History of Branding</SubTopicTitle>
      <p className="mb-4 md:mb-8">
        The term “<Highlight>brand</Highlight>” first emerged more than half a
        century ago as a way for cattle ranchers to identify their animals. In
        the late 1880s, packaged goods like Coca-Cola started taking off. Brands
        were used to differentiate them from the generic competition. 
        differentiate them from the generic competition. 
      </p>
      <p className="mb-4 md:mb-8">
        But as branding progressed, marketers realized there was more to the
        brand of Coca-Cola than just a non-generic name. 
      </p>
      <div className="flex flex-col items-center justify-center gap-2 mt-12 mb-12 rounded-lg md:gap-8 md:mb-0 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={DavidOgilvy}
          alt="Picture"
          className="w-1/2 mx-auto mb-4 text-xs rounded-full sm:w-64 sm:mb-0"
          style={{ width: "clamp(160px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          <Highlight>David Ogilvy</Highlight>, the "
          <Highlight>Father of Advertising</Highlight>," defined a brand as "
          <em>the intangible sum of a product's attributes</em>."
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mb-12 rounded-lg md:gap-8 md:mb-0 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={DictionaryOfBrand}
          alt="Picture"
          className="object-cover w-1/2 mx-auto mb-4 text-xs rounded-full sm:w-64 sm:mb-0 aspect-square"
          style={{ width: "clamp(160px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          The <Highlight>Dictionary of Brand</Highlight> defines a brand as "
          <em>
            a person's perception of a product, service, experience, or
            organization
          </em>
          ."
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mb-12 rounded-lg md:gap-8 md:mb-0 sm:p-8 md:p-12 sm:items-start lg:flex-row">
        <img
          src={MartyNeumeier}
          alt="Picture"
          className="w-1/2 mx-auto mb-4 text-xs rounded-full sm:w-64 sm:mb-0"
          style={{ width: "clamp(160px, 20%, 200px)" }}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <p className="self-center">
          <Highlight>Marty Neumeier</Highlight>, author, and speaker on all
          things brand defines brand by first laying out what a brand is not: "
          <em>
            A brand is not a logo. A brand is not an identity. A brand is not a
            product
          </em>
          ." He goes on to say that "
          <em>
            a brand is a person's gut feeling about a product, service, or
            organization
          </em>
          ."
        </p>
      </div>
      <p className="p-4 bg-blue-200 rounded-lg dark:bg-blue-100 md:p-12 dark:text-gray-800">
        As branding has evolved, brands have become more subjective – more about
        perception and accumulated meaning.
      </p>
    </SubTopicContainer>
  );
};

export default HistoryOfBranding;
