import React from "react";

function Contact() {
  const contacts = [
    {
      name: "Председатель СМУ",
      position: "Ширяев Олег Валерьевич",
      email: "smu@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Зам. председателя СМУ",
      position: "Казанцев Андрей Валерьевич",
      email: "kazancev.av@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Секретарь СМУ",
      position: "Зайнагутдинова Эвелина Ильгизовна",
      email: "zaynagutdinova.ei@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Казанцев А.В.",
      position: "представитель ФИРТ",
      email: "kazancev.av@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Зайнагутдинова Э.И.",
      position: "представитель ФАВИЭТ",
      email: "zaynagutdinova.ei@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1642792743923-3fc2adcd1b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Назаров А.Ю.",
      position: "представитель ИАТМ",
      email: "nazarov.ayu@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Пермяков А.В.",
      position: "представитель ФЗЧС",
      email: "permyakov.av@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Шабельник Ю.А.",
      position: "представитель ФАДЭТ",
      email: "shabelnik.yua@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Дмитриева И.В.",
      position: "представитель ИНЭК",
      email: "dmitrieva.iv@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1642792743923-3fc2adcd1b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Устимова Е.И.",
      position: "представитель вилиала ФГБОУ ВО УУНиТ г. Ишимбай",
      email: "ustimova.ei@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1642792743923-3fc2adcd1b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Ишкулова А.Р.",
      position: "представитель филиала ФГБОУ ВО УУНиТ в г. Кумертау",
      email: "ishkulova.ar@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1642792743923-3fc2adcd1b84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Журавлев А.С.",
      position: "представитель административно-управленческих подразделений",
      email: "zhuravlev.as@ugatu.su",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    },
  ];
  return (
    <div className="p-8 md:p-16 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Контакты:</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <div className="mb-4">
              <img
                src={contact.image}
                alt={contact.name}
                className="rounded-full w-24 h-24 mx-auto object-cover"
              />
            </div>
            <p className="text-lg font-semibold mb-2">{contact.name}</p>
            <p className="text-gray-600 mb-2">{contact.position}</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-500 hover:underline"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
