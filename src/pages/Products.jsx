import React, { useEffect, useState } from "react";
import { Layout, Card } from "../components";
import { brand, category, productData } from "../utils/products";
import { FiFilter } from "react-icons/fi";
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [filteredData, setFilteredData] = useState(productData);
  const [checkedStateCategory, setCheckedStateCategory] = useState(
    new Array(category.length).fill(false)
  );
  const [checkedStateBrand, setCheckedStateBrand] = useState(
    new Array(brand.length).fill(false)
  );

  const handleOnChangeCategory = (position, e) => {
    const updatedCheckedStateCategory = checkedStateCategory.map(
      (item, index) => (index === position ? !item : item)
    );

    setCheckedStateCategory(updatedCheckedStateCategory);
    if (e.target.checked) {
      setSelectedCategory([...selectedCategory, e.target.value]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((item) => item !== e.target.value)
      );
    }
  };
  const handleOnChangeBrand = (position, e) => {
    const updatedCheckedStateBrand = checkedStateBrand.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedStateBrand(updatedCheckedStateBrand);
    if (e.target.checked) {
      setSelectedBrand([...selectedBrand, e.target.value]);
    } else {
      setSelectedBrand(selectedBrand.filter((item) => item !== e.target.value));
    }
  };
  const clearAll = () => {
    setSelectedBrand([]);
    setCheckedStateCategory(new Array(category.length).fill(false));
    setCheckedStateBrand(new Array(category.length).fill(false));
    setSelectedCategory([]);
    filtered();
  };

  const filtered = () => {
    if (selectedBrand.length === 0 && selectedCategory.length === 0) {
      setFilteredData(productData);
    } else {
      if (selectedBrand.length > 0 && selectedCategory.length > 0) {
        const res = productData.filter(
          (item) =>
            selectedCategory.includes(item.category) &&
            selectedBrand.includes(item.brand)
        );
        setFilteredData(res);
      } else if (selectedBrand.length === 0) {
        const res = productData.filter((item) =>
          selectedCategory.includes(item.category)
        );
        setFilteredData(res);
      } else {
        const res = productData.filter((item) =>
          selectedBrand.includes(item.brand)
        );
        setFilteredData(res);
      }
    }
  };
  // console.log(filteredData);
  useEffect(() => {
    filtered();
  }, [filteredData]);
  return (
    <Layout>
      <div className="md:px-8 py-5 px-2 mb-14">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-700">Sports Shoose</h1>
            <p className="font-semibold text-gray-400">
              showing 1-20 out of 2000 products
            </p>
          </div>

          <div className="dropdown  dropdown-left">
            <label tabIndex={0} className="btn m-1">
              <FiFilter />
            </label>
            <div
              tabIndex={0}
              className="dropdown-content px-5 py-6 gap-2 menu p-2 shadow bg-base-100 rounded-box flex items-center flex-col justify-center w-60"
            >
              <div className="w-full">
                <h3 className="font-bold mb-2 text-md text-gray-500">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.map((item, index) => (
                    <div
                      className="text-md font-semibold text-gray-400 capitalize"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        id={index}
                        name={item}
                        value={item}
                        checked={checkedStateCategory[index]}
                        onChange={(e) => handleOnChangeCategory(index, e)}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-bold mb-2 text-md text-gray-500">Brand</h3>
                <div className="flex flex-wrap gap-2">
                  {brand.map((item, index) => (
                    <div
                      className="text-md font-semibold text-gray-400 capitalize"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        id={index}
                        name={item}
                        value={item}
                        checked={checkedStateBrand[index]}
                        onChange={(e) => handleOnChangeBrand(index, e)}
                      />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 w-full flex justify-between ">
                <button
                  className=" btn  bg-red-600 text-white font-semibold px-3 py-2 btn-sm  "
                  onClick={clearAll}
                >
                  Clear all
                </button>
                <button
                  onClick={filtered}
                  className=" btn  bg-sky-600 text-white font-semibold px-3 py-2 btn-sm  "
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Show Products */}
        <div className="flex flex-wrap mt-8 gap-4 items-center justify-center">
          {filteredData.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
