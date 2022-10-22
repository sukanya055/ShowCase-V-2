import React from "react";
import Card from "./Card";

const MainProducts = ({ filteredData }) => {
  return (
    <div>
      <div className="flex flex-wrap mt-8 gap-4 items-center justify-center">
        {filteredData.length > 0 ? (
          filteredData.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <h1 className="text-xl font-semibold capitalize text-red-500">
            No Products Data Available
          </h1>
        )}
      </div>
    </div>
  );
};

export default MainProducts;
