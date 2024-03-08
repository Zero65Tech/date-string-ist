const {
  min,
  max,
  shift,
  getDuration,
  getWeekStart, 
  getWeekEnd, 
  getFy, 
  getFyMonth, 
  getFyStart, 
  getFyEnd, 
  getQtr, 
  getTaxQtr, 
  getFyDuration,
  tomorrow,
  today,
  yesterday,
  lastWeek
} = require('../src');



describe('.min', () => {

  test('Case 1', () => expect(min('2024-01-01', '2024-01-30', '2024-02-01')).toBe('2024-01-01'));
  test('Case 2', () => expect(min('2024-02-01', '2024-01-01', '2024-01-30')).toBe('2024-01-01'));
  test('Case 3', () => expect(min('2024-02-01', '2024-01-30', '2024-01-01')).toBe('2024-01-01'));

});

describe('.max', () => {

  test('Case 1', () => expect(max('2024-01-01', '2024-01-30', '2024-02-01')).toBe('2024-02-01'));
  test('Case 2', () => expect(max('2024-02-01', '2024-01-01', '2024-01-30')).toBe('2024-02-01'));
  test('Case 3', () => expect(max('2024-02-01', '2024-01-30', '2024-01-01')).toBe('2024-02-01'));

});

describe('.shift', () => {

  test('Next Week', () => expect(shift('2024-01-01',  7)).toBe('2024-01-08'));
  test('Jan → Feb', () => expect(shift('2024-01-30',  2)).toBe('2024-02-01'));
  test('Feb → Jan', () => expect(shift('2024-02-01', -2)).toBe('2024-01-30'));

});

describe('.getDuration', () => {

  test('Next Week', () => expect(getDuration('2024-01-01', '2024-01-08')).toBe( 7));
  test('Jan → Feb', () => expect(getDuration('2024-01-30', '2024-02-01')).toBe( 2));
  test('Feb → Jan', () => expect(getDuration('2024-02-01', '2024-01-30')).toBe(-2));

});



describe('.getWeekStart', () => {

  test('2024-01-01', () => expect(getWeekStart('2024-01-01')).toBe('2024-01-01'));
  test('2024-01-02', () => expect(getWeekStart('2024-01-02')).toBe('2024-01-01'));
  test('2024-01-03', () => expect(getWeekStart('2024-01-03')).toBe('2024-01-01'));
  test('2024-01-04', () => expect(getWeekStart('2024-01-04')).toBe('2024-01-01'));
  test('2024-01-05', () => expect(getWeekStart('2024-01-05')).toBe('2024-01-01'));
  test('2024-01-06', () => expect(getWeekStart('2024-01-06')).toBe('2024-01-01'));
  test('2024-01-07', () => expect(getWeekStart('2024-01-07')).toBe('2024-01-01'));

  test('Feb → Jan', () => expect(getWeekStart('2024-02-01')).toBe('2024-01-29'));

});

describe('.getWeekEnd', () => {

  test('2024-01-01', () => expect(getWeekEnd('2024-01-01')).toBe('2024-01-07'));
  test('2024-01-02', () => expect(getWeekEnd('2024-01-02')).toBe('2024-01-07'));
  test('2024-01-03', () => expect(getWeekEnd('2024-01-03')).toBe('2024-01-07'));
  test('2024-01-04', () => expect(getWeekEnd('2024-01-04')).toBe('2024-01-07'));
  test('2024-01-05', () => expect(getWeekEnd('2024-01-05')).toBe('2024-01-07'));
  test('2024-01-06', () => expect(getWeekEnd('2024-01-06')).toBe('2024-01-07'));
  test('2024-01-07', () => expect(getWeekEnd('2024-01-07')).toBe('2024-01-07'));

  test('Jan → Feb', () => expect(getWeekEnd('2024-01-31')).toBe('2024-02-04'));

});

describe('.getFyStart', () => {

  test('2023-12-31', () => expect(getFyStart('2023-12-31')).toBe('2023-04-01'));
  test('2024-03-31', () => expect(getFyStart('2024-03-31')).toBe('2023-04-01'));
  test('2024-04-01', () => expect(getFyStart('2024-04-01')).toBe('2024-04-01'));
  test('2025-03-31', () => expect(getFyStart('2025-03-31')).toBe('2024-04-01'));

});

describe('.getFyEnd', () => {

  test('2023-12-31', () => expect(getFyEnd('2023-12-31')).toBe('2024-03-31'));
  test('2024-03-31', () => expect(getFyEnd('2024-03-31')).toBe('2024-03-31'));
  test('2024-04-01', () => expect(getFyEnd('2024-04-01')).toBe('2025-03-31'));
  test('2025-03-31', () => expect(getFyEnd('2025-03-31')).toBe('2025-03-31'));

});



describe('.getQtr', () => {

  test('2024-04-01', () => expect(getQtr('2024-04-01')).toBe('q1'));
  test('2024-07-01', () => expect(getQtr('2024-07-01')).toBe('q2'));
  test('2024-10-01', () => expect(getQtr('2024-10-01')).toBe('q3'));
  test('2025-01-01', () => expect(getQtr('2025-01-01')).toBe('q4'));

});

describe('.getTaxQtr', () => {

  test('2024-04-01', () => expect(getTaxQtr('2024-04-01')).toBe('q1'));
  test('2024-06-16', () => expect(getTaxQtr('2024-06-16')).toBe('q2'));
  test('2024-09-16', () => expect(getTaxQtr('2024-09-16')).toBe('q3'));
  test('2025-12-16', () => expect(getTaxQtr('2025-12-16')).toBe('q4'));
  test('2025-01-16', () => expect(getTaxQtr('2025-01-16')).toBe('q4'));
  test('2025-03-16', () => expect(getTaxQtr('2025-03-16')).toBe('q5'));

});

describe('.getFy', () => {

  test('2024-01-01', () => expect(getFy('2024-01-01')).toBe('fy24'));
  test('2024-03-31', () => expect(getFy('2024-03-31')).toBe('fy24'));
  test('2024-04-01', () => expect(getFy('2024-04-01')).toBe('fy25'));
  test('2025-03-31', () => expect(getFy('2025-03-31')).toBe('fy25'));

});



describe('.getFyDuration', () => {

  test('2023-06-16', () => expect(getFyDuration('2023-06-16')).toBe(366));
  test('2024-04-01', () => expect(getFyDuration('2024-04-01')).toBe(365));

});
