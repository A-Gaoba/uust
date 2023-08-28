import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterColumn = ({ title, data }) => (
  <div className="container mx-auto flex justify-between ">
    <div className="footer-column px-2">
      <h2 className="text-xl font-bold my-6">{title}</h2>
      {data.map((item, index) => (
        <div className="flex gap-2 mb-6 justify-start items-center" key={index}>
          {item.icon}
          <Link to={item.link} className="hover:text-purple-600 transition-colors duration-300">{item.text}</Link>
        </div>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const firstColumnData = [
    {
      icon: <FaPhone />,
      text: "Сайт УУНиТ",
      link: "https://uust.ru/",
    },
    {
      icon: <FaPhone />,
      text: "ул. Заки Валиди, 32, каб. 201",
      link: "/",
    },
    {
      text: "Приемная ректора",
    },
    {
      icon: <FaPhone />,
      text: "+ 7 (347) 229-96-16",
      link: "tel:+73472299616",
    },
    {
      icon: <FaPhone />,
      text: "rector@uust.ru",
      link: "mailto:rector@uust.ru",
    },
  ];

  const secondColumnData = [
    {
      icon: <FaPhone />,
      text: "Сайт ПК",
      link: "/",
    },
    {
      icon: <FaPhone />,
      text: "ул. К.Маркса, д. 12, корпус 8, ком. 109",
    },
    {
      text: "ПН-ЧТ с 9:00 до 18:00,ПТ с 9:00 до 16:45",
    },
    {
      icon: <FaPhone />,
      text: "+ 7 (917) 379-07-00",
      link: "/",
    },
    {
      icon: <FaPhone />,
      text: "abiturient@uust.ru",
      link: "/",
    },
  ];

  const thirdColumnData = [
    {
      icon: <span className="w-2 h-2 bg-white rounded-full"></span>,
      text: "Контакты Уфимского университета",
      link: "/",
    },
    {
      icon: <span className="w-2 h-2 bg-white rounded-full"></span>,
      text: "Новости",
      link: "/",
    },
    {
      icon: <span className="w-2 h-2 bg-white rounded-full"></span>,
      text: "Документы",
      link: "/",
    },
    {
      icon: <span className="w-2 h-2 bg-white rounded-full"></span>,
      text: "Руководство университета",
      link: "/",
    },
    {
      icon: <span className="w-2 h-2 bg-white rounded-full"></span>,
      text: "Противодействие коррупции",
      link: "/",
    },
  ];

  const forthColumnData = [
    {
      icon: <FaPhone />,
      text: "ИСУ",
      link: "/",
    },
    {
      icon: <FaPhone />,
      text: "Система дистанционного образования",
      link: "/",
    },
    {
      icon: <FaPhone />,
      text: "Научно-техническая библиотека",
      link: "/",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#4d19cc] to-[#1500aa] text-white p-8 flex flex-col lg:flex-row gap-6">
      <FooterColumn title="ФГБОУ ВО «УУНиТ»" data={firstColumnData} />
      <FooterColumn title="Приемная комиссия" data={secondColumnData} />
      <FooterColumn title="Полезные ссылки" data={thirdColumnData} />
      <FooterColumn title="Ресурсы университета" data={forthColumnData} />
    </footer>
  );
};

export default Footer;
