import React from "react";
import SubTopicContainer from "../../ui/SubTopicContainer";
import SubTopicTitle from "../../ui/SubTopicTitle";

function Product() {
  return (
    <SubTopicContainer>
      <SubTopicTitle>1. Product</SubTopicTitle>
      <p className="mb-4 md:mb-8">
        In the manufacturing industry, the production and consumption of the
        product are not simultaneous, and it is tangible, not always diverse nor
        usually perishable. In the service industry, the production and
        consumption of the product are simultaneous, and the product is
        intangible, diverse, and perishable.
      </p>
      <div className="mb-8 overflow-hidden text-xs text-center rounded-lg md:text-base md:mb-12">
        <table className="min-w-full overflow-hidden bg-gray-300 border-collapse table-auto">
          <thead>
            <tr className="text-white bg-blue-500">
              <th className="p-2 border-b border-r border-white md:p-4 last:border-r-0">
                Characteristics
              </th>
              <th className="p-2 border-b border-r border-white md:p-4 last:border-r-0">
                Manufacturing Industry
              </th>
              <th className="p-2 border-b border-r border-white md:p-4 last:border-r-0">
                Service Industry
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-100 dark:text-gray-800">
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">
                Production and Consumption
              </td>
              <td className="p-2 border-b border-r border-white md:p-4">Not Simultaneous</td>
              <td className="p-2 border-b border-white md:p-4">Simultaneous</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">
                Product Tangibility{" "}
              </td>
              <td className="p-2 border-b border-r border-white md:p-4">Tangible</td>
              <td className="p-2 border-b border-white md:p-4">Intangible</td>
            </tr>
            <tr>
              <td className="p-2 border-b border-r border-white md:p-4">
                Product Diversity
              </td>
              <td className="p-2 border-b border-r border-white md:p-4">
                Not always diverse
              </td>
              <td className="p-2 border-b border-white md:p-4">Diverse</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-white md:p-4">Product Perishability</td>
              <td className="p-2 border-r border-white md:p-4">Usually not perishable</td>
              <td className="p-2 md:p-4">Perishable</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The nature of this "product" allows for on the spot customization. This
        also means that the point at which this activity is occurring becomes
        very important.
      </p>
      
    </SubTopicContainer>
  );
}

export default Product;
