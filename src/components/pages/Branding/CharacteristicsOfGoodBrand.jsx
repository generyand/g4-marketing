import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";

const CharacteristicsOfGoodBrand = () => {
  return (
    <SubTopicContainer>
      <SubTopicTitle>Characteristics of a Good Brand Name</SubTopicTitle>
      {/* <p className="mb-4 md:mb-8">This page outlines the key characteristics that make up a strong and effective brand.</p> */}
      <div className="mb-8 overflow-hidden text-xs rounded-lg md:text-base md:mb-12">
        <table className="min-w-full overflow-hidden bg-gray-300 border-collapse table-auto">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="p-2 border-b border-r border-white md:p-4 last:border-r-0">
                Characteristics
              </th>
              <th className="p-2 border-b border-r border-white md:p-4 last:border-r-0">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-100 dark:text-gray-800">
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">Short and simple</td>
              <td className="p-2 border-b border-white md:p-4">Suggestive product benefits</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">Easy to spell and read</td>
              <td className="p-2 border-b border-white md:p-4">Adaptable to packaging/labeling needs</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">Easy to recognize and remember</td>
              <td className="p-2 border-b border-white md:p-4">No undesirable imagery</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">Easy to pronounce</td>
              <td className="p-2 border-b border-white md:p-4">Always timely</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">Can be pronounced in only one way</td>
              <td className="p-2 border-b border-white md:p-4">Adaptable to any advertising medium</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-white md:p-4">Can be pronounced in all languages</td>
              <td className="p-2 md:p-4">Legally available to use</td>
            </tr>
          </tbody>
        </table>
      </div>
    </SubTopicContainer>
  );
};

export default CharacteristicsOfGoodBrand;