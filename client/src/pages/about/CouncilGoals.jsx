import React from "react";

const CouncilGoals = () => {
  const tasks = [
    "содействие профессиональному росту молодых ученых, а также содействие обеспечению необходимых условий труда, жизни и организации спортивного и культурного досуга молодых ученых и их семей;",
    "вовлечение молодых ученых и обучающихся в научную и инновационную деятельность;",
    "содействие научно-исследовательской, проектно-конструкторской, изобретательской, внедренческой, патентной, инновационной и иной творческой деятельности молодых ученых и обучающихся;",
    "объединение усилий и координация взаимодействия молодых ученых при решении актуальных научных проблем и приоритетных научных задач, содействие общественно полезным научным инициативам молодых ученых;",
    "активизация научно-исследовательской работы и совершенствование форм участия молодых ученых в междисциплинарных исследовательских проектах, научных грантах, молодежных научных школах, конкурсах, проблемных семинарах, программах, стажировках, оказание информационной поддержки и организация обмена опытом;",
    "отбор и популяризация выдающихся достижений молодых ученых Университета, содействие закреплению молодых научных кадров, распространению (внедрению) результатов исследований молодых ученых;",
    "формирование и поддержка общеуниверситетской информационной базы данных молодых ученых Университета, а также их научных исследований и разработок;",
    "организация и проведение мероприятий (научных конференций, семинаров, выставок, форумов, выездных школ) по привлечению учащихся школ и обучающихся вузов к научным исследованиям, способствование распространению результатов исследования;",
    "формирование и развитие непосредственных контактов с Советами молодых ученых других вузов Республики Башкортостан, России и зарубежья, научными центрами, направленных на решение актуальных и практических задач современной науки, осуществление совместных мероприятий."
  ];

  return (
    <div className="p-16 shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Цели и задачи Совета</h1>
      <div className="flex">
        <p className="text-lg mb-4 w-2/3 p-4">
          Совет имеет целью пропаганду новейших достижений науки и техники,
          объединение и активизацию участия молодых ученых в научных
          исследованиях, содействие укреплению и развитию международных связей
          молодых ученых, реализацию профессиональных и интеллектуальных
          интересов и прав научной молодежи, содействие в реализации, сохранении
          и восполнении на этой основе научного, творческого, интеллектуального
          и инновационного потенциала университета.
        </p>

        <img
          src="https://images.unsplash.com/photo-1573166675921-076ea6b621ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q291bmNpbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Council Goals"
          className="w-1/3 h-auto shadow-md mb-6 hidden lg:block"
        />
      </div>
      <p className="text-lg mb-6">
        Совет в пределах своей компетенции решает следующие задачи:
      </p>
      <ul className="list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index} className="text-gray-800 mb-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CouncilGoals;
