import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pageNumbersToShow = 1;
  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - pageNumbersToShow);
    const endPage = Math.min(totalPages, startPage + 2 * pageNumbersToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 transition ease-in-out duration-150"
        >
          <BiChevronLeft />
        </button>
        <div className="hidden sm:flex">
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 ${
                currentPage === page ? "font-bold bg-gray-100" : ""
              } focus:outline-none focus:ring focus:border-blue-300 transition ease-in-out duration-150`}
            >
              {page}
            </button>
          ))}
        </div>
        <div className="sm:hidden relative">
          <select
            value={currentPage}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="appearance-none w-full py-2 pl-3 pr-10 border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 transition ease-in-out duration-150"
          >
            {getPageNumbers().map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <FaAngleDown />
          </div>
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 transition ease-in-out duration-150"
        >
          <BiChevronRight />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
