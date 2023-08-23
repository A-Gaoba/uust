import React, { useContext, useState } from "react";
import moment from "moment";
import "moment/locale/en-gb";
import { NewsContext } from "../../contexts/NewsContext";
import Pagination from "./Pagination";
import Loading from "./Loading";

const NewsPage = () => {
  const { newsItems, isLoading, filteredNewsItems } = useContext(NewsContext);

  const news = filteredNewsItems.length ? filteredNewsItems : newsItems;

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = news?.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-center items-center mb-7 bg-slate-400 h-40 w-full">
        <h1 className="text-6xl font-semibold">НОВОСТИ</h1>
      </div>


      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {currentItems.map((item) => (
              <div
                key={item.postUrl}
                className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300"
              >
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover object-center"
                  />
                </a>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 text-black">
                    {item.title}
                  </h2>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-400 text-md font-bold mb-4">
                      {moment(item.date).fromNow()}
                    </p>
                    <a
                      href={item.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-200"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
};

export default NewsPage;
