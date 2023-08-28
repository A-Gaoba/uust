import React from "react";

const CouncilTeams = () => {
  const members = [
    {
      name: "Ширяев О.В.",
      position: "председатель",
      department: "кафедра ЦТЭУ",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Казанцев А.В.",
      position: "заместитель председателя",
      department: "кафедра АСУ",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Зайнагутдинова Э.И.",
      position: "ответственный секретарь",
      department: "НИИ ЭТкиС ПИШ 'Моторы будущего'",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Назаров А.Ю.",
      position: "представитель ИАТМ",
      department: "руководитель СКБ 'Силовые машины'",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Пермяков А.В.",
      position: "представитель ФЗЧС",
      department: "кафедра ПБ",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Шабельник Ю.А.",
      position: "представитель ФАДЭТ",
      department: "старший преподаватель кафедры МиЦП",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Дмитриева И.В.",
      position: "представитель ИНЭК",
      department: "старший преподаватель кафедры ЭП",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Устимова Е.И.",
      position: "представитель филиала ФГБОУ ВО УУНиТ г. Ишимбай",
      department: "старший преподаватель кафедры ТиТМ",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Ишкулова А.Р.",
      position: "представитель филиала ФГБОУ ВО УУНиТ в г. Кумертау",
      department: "к.т.н., доцент кафедры ТПЛА",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Журавлев А.С.",
      position: "представитель административно-управленческих подразделений",
      department: "заместитель директора ЕИК",
      image:
        "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    },
  ];

  return (
    <div className="p-16 shadow-lg">
      <h1 className="text-3xl font-bold mb-6">
        Состав Совета молодых ученых литера Т УУНиТ:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <img
              src={member.image}
              alt={`${member.name} - ${member.position}`}
              className="mx-auto mb-4 object-contain rounded-full"
            />
            <h2 className="text-lg font-semibold mb-2">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
            <p className="text-gray-600">{member.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouncilTeams;
