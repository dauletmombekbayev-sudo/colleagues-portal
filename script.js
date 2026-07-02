const news = [
  {
    day: "02",
    month: "июл",
    title: "Запущен внутренний портал для коллег",
    text: "Теперь новости, объявления, события и контакты команды собраны на одной странице.",
  },
  {
    day: "05",
    month: "июл",
    title: "Обновление регламента отпусков",
    text: "HR-команда подготовила короткую памятку по планированию отпусков на летний период.",
  },
  {
    day: "08",
    month: "июл",
    title: "Новый формат еженедельных встреч",
    text: "Командные синки станут короче: больше решений, меньше повторов и отчетности.",
  },
];

const announcements = [
  {
    tag: "Важно",
    title: "Проверьте данные профиля",
    text: "До пятницы обновите телефон, должность и отдел, чтобы поиск сотрудников работал корректно.",
  },
  {
    tag: "Офис",
    title: "Переговорная A будет закрыта",
    text: "С 10:00 до 13:00 пройдет техническое обслуживание оборудования для видеосвязи.",
  },
  {
    tag: "IT",
    title: "Плановое обновление сервисов",
    text: "В субботу возможны краткие перерывы в работе внутренних систем.",
  },
];

const events = [
  {
    day: "09",
    month: "июл",
    type: "Встреча",
    title: "Общий синк компании",
    text: "Итоги месяца, планы и ответы на вопросы команды.",
  },
  {
    day: "12",
    month: "июл",
    type: "Обучение",
    title: "Мастер-класс по Excel",
    text: "Практические приемы для отчетов и анализа данных.",
  },
  {
    day: "16",
    month: "июл",
    type: "Команда",
    title: "День открытых идей",
    text: "Собираем предложения по улучшению процессов.",
  },
  {
    day: "22",
    month: "июл",
    type: "HR",
    title: "Онбординг новых сотрудников",
    text: "Знакомство с командами, сервисами и правилами компании.",
  },
];

const birthdays = [
  { name: "Алия Нурманова", role: "HR-менеджер", date: "07 июл" },
  { name: "Илья Смирнов", role: "Финансовый аналитик", date: "14 июл" },
  { name: "Марина Петрова", role: "Руководитель проектов", date: "19 июл" },
  { name: "Данияр Ахметов", role: "Backend-разработчик", date: "28 июл" },
];

const employees = [
  {
    name: "Алия Нурманова",
    role: "HR-менеджер",
    department: "HR",
    email: "aliya@company.kz",
  },
  {
    name: "Илья Смирнов",
    role: "Финансовый аналитик",
    department: "Финансы",
    email: "ilya@company.kz",
  },
  {
    name: "Марина Петрова",
    role: "Руководитель проектов",
    department: "PMO",
    email: "marina@company.kz",
  },
  {
    name: "Данияр Ахметов",
    role: "Backend-разработчик",
    department: "IT",
    email: "daniyar@company.kz",
  },
  {
    name: "Екатерина Волкова",
    role: "Дизайнер интерфейсов",
    department: "Продукт",
    email: "ekaterina@company.kz",
  },
  {
    name: "Руслан Жаксыбаев",
    role: "Специалист поддержки",
    department: "Сервис",
    email: "ruslan@company.kz",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

const renderNews = () => {
  document.querySelector("#newsList").innerHTML = news
    .map(
      (item) => `
        <article class="news-card">
          <div class="news-date"><span>${item.day}</span><small>${item.month}</small></div>
          <div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-text">${item.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderAnnouncements = () => {
  document.querySelector("#announcementList").innerHTML = announcements
    .map(
      (item) => `
        <article class="announcement-card">
          <span class="announcement-tag">${item.tag}</span>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-text">${item.text}</p>
        </article>
      `,
    )
    .join("");
};

const renderEvents = () => {
  document.querySelector("#eventList").innerHTML = events
    .map(
      (item) => `
        <article class="event-card">
          <div class="event-date"><span>${item.day}</span><small>${item.month}</small></div>
          <div>
            <span class="event-type">${item.type}</span>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-text">${item.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
};

const renderBirthdays = () => {
  document.querySelector("#birthdayList").innerHTML = birthdays
    .map(
      (person) => `
        <article class="birthday-card">
          <div class="avatar" aria-hidden="true">${initials(person.name)}</div>
          <div>
            <h3 class="card-title">${person.name}</h3>
            <p class="card-text">${person.role}</p>
          </div>
          <span class="birthday-date">${person.date}</span>
        </article>
      `,
    )
    .join("");
};

const renderPeople = (items) => {
  const peopleList = document.querySelector("#peopleList");
  document.querySelector("#peopleCount").textContent = items.length;

  if (items.length === 0) {
    peopleList.innerHTML = '<div class="empty-state">Сотрудники не найдены</div>';
    return;
  }

  peopleList.innerHTML = items
    .map(
      (person) => `
        <article class="person-card">
          <div class="avatar" aria-hidden="true">${initials(person.name)}</div>
          <div>
            <h3 class="card-title">${person.name}</h3>
            <p class="card-text">${person.role} · ${person.email}</p>
          </div>
          <span class="person-department">${person.department}</span>
        </article>
      `,
    )
    .join("");
};

document.querySelector("#employeeSearch").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  const filtered = employees.filter((person) =>
    [person.name, person.role, person.department, person.email]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );

  renderPeople(filtered);
});

renderNews();
renderAnnouncements();
renderEvents();
renderBirthdays();
renderPeople(employees);
