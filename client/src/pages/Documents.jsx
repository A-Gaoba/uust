import React from 'react';

const sidebarItems = [
  "ПРИКАЗЫ",
  "ШАБЛОНЫ",
  "ТЕЛЕФОННЫЙ СПРАВОЧНИК УГАТУ"
];

const documentLinks = [
  { title: "Телефонный справочник УГАТУ", link: "https://www.ugatu.su/media/eduInfo/phones.pdf" },
  
];

function Sidebar() {
  return (
    <div className="w-1/4 pr-12">
      <ul className="text-gray-700 font-bold cursor-pointer list-inside space-y-6 bg-slate-200 p-4">
        {sidebarItems.map((item, index) => (
          <li key={index} className="mb-2 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Documents() {
  return (
    <div className="flex bg-gray-100 p-8 rounded-lg shadow-lg">
      <Sidebar />
      <div className="w-3/4">
        <h1 className="text-3xl font-bold mb-6">Документы и ссылки</h1>
        <ul className="list-disc list-inside space-y-4">
          {documentLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Documents;
