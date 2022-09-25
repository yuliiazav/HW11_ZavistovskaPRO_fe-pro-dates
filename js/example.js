console.log(getDay(new Date(2022, 1, 1), 'ru')); // Вторник;
console.log(getDay(new Date(2022, 1, 1), 'en')); // Tuesday;

console.log(formatTime(new Date(2021, 1, 1, 20, 1))); // 20:01
console.log(formatTime(new Date(2021, 1, 1, 20, 4))); // 20:01
console.log(formatTime(new Date(2021, 1, 1, 14, 2))); // 20:01

console.log(getLastDayOfMonth(2022, 1)); // 28
