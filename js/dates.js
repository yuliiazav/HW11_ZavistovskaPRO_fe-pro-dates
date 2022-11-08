// Функция состоит из двух аргументов и должна вернуть день недели. В первый
// мы передаем объект даты и вторым аргументом язык(доступно либо 'en' либо 'ru')
// и функция должна вернуть день недели словом в зависимости от языка. Очень круто,
// если выйдет сделать это ОДНОЙ строкой.
let date = new Date();

function getDay(date, lang) {
  const dayNames = {
    en: {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    },
    ru: {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота',
    },
  };
  return dayNames[lang][date.getDay()];
}

// Принимает объект даты, и должно вернуть компоненты даты в виде строки.
// Вид должен быть такой 12:02(часы и минуты), то есть если у вас одно число на одном из
// компонентов, то добавляем 0 перед ним

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  function formattedTimeView (hours, minutes) {
    return `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
  }
  let result = formattedTimeView (hours, minutes);
  return result;
}


  // let result = `${hours}:${minutes}`;
  //
  //   if (hours < 10 && minutes >= 10) {
  //   return `0${hours}:${minutes}`
  // }
  //   if (hours >= 10 && minutes < 10) {
  //   return `${hours}:0${minutes}`
  // }
  // if (hours < 10 && minutes < 10) {
  //   return `0${hours}:0${minutes}`
  // }  else {
  //   return result;
  // }


/*
Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31
или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {
let date = new Date(year, month+1, 0);
 return date.getDate();
}

module.exports = {
  getDay,
  formatTime,
  getLastDayOfMonth,
};
