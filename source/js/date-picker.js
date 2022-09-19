export default () => {
  const calendarEvents = window.properties?.calendarEvents || [];
  const calendarEvent = document.querySelector('.filters__datepicker');
  const chooseDateField = document.querySelector('.filters__choose-date');
  const customDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const customMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  if (calendarEvent) {
    const dateChoise = datepicker(calendarEvent, {
      formatter: (input, date, instance) => {
        input.value = 'c ' + date.toLocaleDateString();
      },
      onSelect: (instance, date) => {
        if (date) {
          //chooseDateField.textContent = `${date.getDate()} ${customMonth[date.getMonth()]} ${date.getFullYear()}`;
		      chooseDateField.textContent = "".concat(date.getDate(), " ").concat(customMonth[date.getMonth()], " ").concat(date.getFullYear());
          chooseDateField.setAttribute("data-date", date.getDate());
          chooseDateField.setAttribute("data-month", date.getMonth()+1);
          chooseDateField.setAttribute("data-year", date.getFullYear());
        } else {
          chooseDateField.setAttribute("data-date", "");
          chooseDateField.setAttribute("data-month", "");
          chooseDateField.setAttribute("data-year", "");
        }
        
          //eventsRefreshFilter();
          eventsRefreshCalendar();
      },
      disabledDates: [
        new Date(2021, 10, 5),
        new Date(2021, 10, 8),
        new Date(2021, 11, 10),
        new Date(2021, 10, 11),
        new Date(2021, 10, 19),
      ],
      alwaysShow: true,
      showAllDates: true,
      startDay: 1,
      customDays: customDays,
      customMonths: customMonth,
      overlayButton: 'Выбрать',
      overlayPlaceholder: 'Введите год',
      dateSelected: new Date(),
      id: 1,
      events: calendarEvents
    });

    return dateChoise;

  }
};
