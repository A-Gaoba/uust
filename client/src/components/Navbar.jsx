import React, { useContext, useState } from "react";
import { NewsContext } from "../../contexts/NewsContext";

const pages = [
  { name: "НОВОСТИ", path: "news" },
  { name: "МЕРОПРИЯТИЯ", path: "events" },
  { name: "О СМУ", path: "about" },
  { name: "ИНФОРМАЦИЯ", path: "informations" },
  { name: "ДОКУМЕНТЫ", path: "documents" },
  { name: "КОНТАКТЫ", path: "contacts" },
];

function Navbar() {
  const { setSearchQuery, searchQuery } = useContext(NewsContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-br from-[#4d19cc] to-[#1500aa] px-4 py-2 sticky top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="/"
          className="text-xl font-bold cursor-pointer text-white transition-all duration-500 hover:text-blue-500"
        >
          SMU
        </a>
      </div>

      <div className="flex-grow">
        <ul className="flex justify-end space-x-4">
          {pages.map((page, index) => (
            <li key={index}>
              <a
                href={`/${page.path}`}
                className="text-white transition-all duration-500 hover:text-blue-500 text-xs font-bold"
              >
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form className="w-full max-w-sm p-2 ml-6">
        <div className="flex items-center border-b-2 border-white py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </form>
    </nav>
  );
}

export default Navbar;
