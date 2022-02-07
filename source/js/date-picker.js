export default () => {
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
        chooseDateField.textContent = `${date.getDate()} ${customMonth[date.getMonth()]} ${date.getFullYear()}`;
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
    });
  }
};
