const dates = require('../dates');

describe('Dates functions', () => {
  describe('getDay()', () => {
    const enNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const ruNames = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];
    const datesArr = [
      {
        date: new Date(2022, 0, 31),
        day: {
          ru: ruNames[1],
          en: enNames[1],
        },
      },
      {
        date: new Date(2022, 1, 1),
        day: {
          ru: ruNames[2],
          en: enNames[2],
        },
      },
      {
        date: new Date(2022, 1, 2),
        day: {
          ru: ruNames[3],
          en: enNames[3],
        },
      },
      {
        date: new Date(2022, 1, 3),
        day: {
          ru: ruNames[4],
          en: enNames[4],
        },
      },
      {
        date: new Date(2022, 1, 4),
        day: {
          ru: ruNames[5],
          en: enNames[5],
        },
      },
      {
        date: new Date(2022, 1, 5),
        day: {
          ru: ruNames[6],
          en: enNames[6],
        },
      },
      {
        date: new Date(2022, 1, 6),
        day: {
          ru: ruNames[0],
          en: enNames[0],
        },
      },
    ];

    test.each(datesArr)('runs with %p', ({ date, day }) => {
      expect(dates.getDay(date, 'ru')).toStrictEqual(day.ru);
      expect(dates.getDay(date, 'en')).toStrictEqual(day.en);
    });
  });

  describe('formatTime()', () => {
    const stubs = [
      {
        date: new Date(2021, 1, 1, 3, 3),
        str: '03:03',
      },
      {
        date: new Date(2021, 1, 1, 13, 32),
        str: '13:32',
      },
      {
        date: new Date(2021, 1, 1, 0, 23),
        str: '00:23',
      },
    ];
    test.each(stubs)('returns correct value', ({ date, str }) => {
      expect(dates.formatTime(date)).toStrictEqual(str);
    });
  });

  describe('getLastDayOfMonth', function () {
    it('последнее число 01.01.2012 - 31', function () {
      expect(dates.getLastDayOfMonth(2012, 0)).toStrictEqual(31);
    });

    it('последнее число 01.02.2012 - 29 (високосный год)', function () {
      expect(dates.getLastDayOfMonth(2012, 1)).toStrictEqual(29);
    });

    it('последнее число 01.02.2013 - 28', function () {
      expect(dates.getLastDayOfMonth(2013, 1)).toStrictEqual(28);
    });
  });
});
