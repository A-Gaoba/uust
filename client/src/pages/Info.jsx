import React from "react";

function Info() {
  const links = [
    {
      title: "Официальное сообщество Совета Молодых Ученых Вконтакте",
      link: "https://vk.com/smu_ugatu",
    },
    {
      title:
        "Конкурсы🎉, Стипендии💰, Стажировки🏢, Конференции📚, Аналитика📊, Инсайды",
      link: "https://t.me/BashSciEdu",
    },
    {
      title: "Официальное сообщество Science Slam УУНиТ Вконтакте🧪",
      link: "https://vk.com/science_slam_usatu",
    },
    {
      title: "Официальное сообщество 'ПрофВзлёт' в Телеграмме✈️",
      link: "https://t.me/profvzlet",
    },
    {
      title: "Официальное сообщество 'ПрофВзлёт' Вконтакте✈️",
      link: "https://vk.com/profvzlet",
    },
    {
      title:
        "Официальный канал Евразийского научно-образовательного центра республики Башкортостан в Телеграмме",
      link: "https://t.me/eurasian_noc",
    },
    {
      title:
        "Официальный сайт Евразийского научно-образовательного центра республики Башкортостан",
      link: "https://nocrb.ru/",
    },
    {
      title: "Электронные сетевые издания УУНиТ",
      link: "https://www.ugatu.su/elektronnyie-izdaniya/",
    },
    {
      title:
        "Поисковая платформа, где формируется сообщество ученых, ежедневно двигающих науку вперёд",
      link: "https://colab.ws/",
    },
  ];

  return (
    <div className="p-16 shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Ссылки на социальные сети:</h1>
      <ul className="list-disc pl-6">
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500 hover:underline"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
