const { getWeekStart, getWeekEnd } = require('../src');



describe('.getWeekStart', () => {

  test('2024-01-01', () => expect(getWeekStart('2024-01-01')).toBe('2024-01-01'));
  test('2024-01-02', () => expect(getWeekStart('2024-01-02')).toBe('2024-01-01'));
  test('2024-01-03', () => expect(getWeekStart('2024-01-03')).toBe('2024-01-01'));
  test('2024-01-04', () => expect(getWeekStart('2024-01-04')).toBe('2024-01-01'));
  test('2024-01-05', () => expect(getWeekStart('2024-01-05')).toBe('2024-01-01'));
  test('2024-01-06', () => expect(getWeekStart('2024-01-06')).toBe('2024-01-01'));
  test('2024-01-07', () => expect(getWeekStart('2024-01-07')).toBe('2024-01-01'));

  test('2024-02-01', () => expect(getWeekStart('2024-02-01')).toBe('2024-01-29')); // Feb → Jan

});

describe('.getWeekEnd', () => {

  test('2024-01-01', () => expect(getWeekEnd('2024-01-01')).toBe('2024-01-07'));
  test('2024-01-02', () => expect(getWeekEnd('2024-01-02')).toBe('2024-01-07'));
  test('2024-01-03', () => expect(getWeekEnd('2024-01-03')).toBe('2024-01-07'));
  test('2024-01-04', () => expect(getWeekEnd('2024-01-04')).toBe('2024-01-07'));
  test('2024-01-05', () => expect(getWeekEnd('2024-01-05')).toBe('2024-01-07'));
  test('2024-01-06', () => expect(getWeekEnd('2024-01-06')).toBe('2024-01-07'));
  test('2024-01-07', () => expect(getWeekEnd('2024-01-07')).toBe('2024-01-07'));

  test('2024-01-31', () => expect(getWeekEnd('2024-01-31')).toBe('2024-02-04')); // Jan → Feb

});