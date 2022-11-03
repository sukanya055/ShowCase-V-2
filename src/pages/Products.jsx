import React, { useState, useEffect } from "react";
import { Layout, MainProducts } from "../components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import SideBarProduct from "../components/SideBarProduct";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Loader from "../utils/Loader";
import ReactPaginate from "react-paginate";
const Products = () => {
  const [price, setPrice] = useState();
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [sizeNumber, setSizeNumber] = useState(price?.max);
  const [sizes, setSizes] = useState("s");
  const [sortedBy, setSortedBy] = useState("1");
  const { content } = useParams();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [count, setCount] = useState();
  console.log(sizes);
  const { isLoading, data, refetch } = useQuery(
    [
      "get-all-video",
      content?.split("-")[0],
      content?.split("-")[1],
      sortedBy,
      price?.min,
    ],
    () =>
      axios.get(
        `http://localhost:5000/admin/get-product?content=${
          content.split("-")[0]
        }&user=${content?.split("-")[1]}&sortedBy=${sortedBy}&minPrice=${
          price?.min || 0
        }&maxPrice=${sizeNumber}&size=${size}&page=${page}`
      )
  );

  useEffect(() => {
    const length = Math.ceil(data?.data?.count / 10);
    setCount(length);
  }, [data?.data?.count]);

  console.log(sortedBy);
  console.log(data?.data);
  console.log(sizeNumber);

  if (isLoading) return <Loader />;

  const SetSize = () => {
    switch (sizeNumber) {
      case 0:
        setSizes("xs");
        break;
      case 25:
        setSizes("s");
        break;
      case 50:
        setSizes("m");
        break;
      case 75:
        setSizes("l");
        break;
      case 100:
        setSizes("xl");
        break;

      default:
        break;
    }
  };

  const handlePageClick = (data) => {
    setPage(data.selected);
  };

  const handleOnChangeCollections = (e) => {
    if (e.target.checked) {
      setSelectedCollections([...selectedCollections, e.target.value]);
    } else {
      setSelectedCollections(
        selectedCollections.filter((item) => item !== e.target.value)
      );
    }
  };

  return (
    <Layout>
      <div className="px-8 py-5">
        <div className="">
          <p className="font-normal text-gray-700 text-md">
            {content?.split("-")[1]}s Sections
          </p>
          <h1 className="font-semibold capitalize text-lg">
            {content?.split("-")[1]} {content?.split("-")[0]} -{" "}
            {data?.data?.result?.length} items
          </h1>
        </div>

        <div className="flex justify-between mt-5 md:justify-end items-center">
          <label
            htmlFor="my-modal-3"
            className=" md:hidden flex items-center btn modal-button"
          >
            <FiFilter className="text-2xl   cursor-pointer text-gray-900" />
          </label>

          <select
            className="select  w-auto select-primary bg-gray-100  max-w-xs capitalize "
            onChange={(e) => setSortedBy(e.target.value)}
          >
            <option value="" disabled selected>
              Sort By
            </option>

            <option value="-1">Price high to low</option>
            <option value="1">Price Low to High</option>
          </select>
        </div>

        <div className="flex flex-row h-full ">
          <div className="basis-1/4 h-full px-4 py-3 hidden md:block items-center">
            <SideBarProduct
              selectedCollections={selectedCollections}
              handleOnChangeCollections={handleOnChangeCollections}
              sizeNumber={sizeNumber}
              SetSize={SetSize}
              setSizeNumber={setSizeNumber}
              content={content}
              setPrice={setPrice}
              refetch={refetch}
            />
          </div>
          <div className="md:basis-3/4 basis-4/4 h-full">
            <MainProducts filteredData={data?.data?.result} />
          </div>
        </div>
        <div className="md:hidden block absolute top-0">
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle text-xl  absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="mt-8">
                <SideBarProduct
                  selectedCollections={selectedCollections}
                  handleOnChangeCollections={handleOnChangeCollections}
                  sizeNumber={sizeNumber}
                  SetSize={SetSize}
                  setSizeNumber={setSizeNumber}
                />
              </div>
            </div>
          </div>
        </div>

        {data?.data?.result && (
          <div className="flex justify-center items-center mb-5">
            <div className="w-[100%]  flex items-center justify-center">
              <ReactPaginate
                previousLabel={
                  <HiChevronLeft className="text-2xl text-white flex justify-center items-center" />
                }
                nextLabel={
                  <HiChevronRight className="text-2xl text-white flex justify-center items-center" />
                }
                breakLabel={"..."}
                pageCount={count}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={"paginateContainer"}
                pageClassName={"page-btn"}
                previousClassName={"previous"}
                previousLinkClassName={"link-btn"}
                pageLinkClassName={"link-btn"}
                nextClassName={"previous"}
                breakClassName={"page-btn"}
                breakLinkClassName={"link-btn"}
                nextLinkClassName={"link-btn"}
                activeClassName={"active-btn"}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;
