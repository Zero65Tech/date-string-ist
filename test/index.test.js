const { getWeekStart } = require('../src');



describe('.getWeekStart', () => {

  test('2024-01-01', () => expect(getWeekStart('2024-01-01')).toBe('2024-01-01'));
  test('2024-01-02', () => expect(getWeekStart('2024-01-02')).toBe('2024-01-01'));
  test('2024-01-03', () => expect(getWeekStart('2024-01-03')).toBe('2024-01-01'));
  test('2024-01-04', () => expect(getWeekStart('2024-01-04')).toBe('2024-01-01'));
  test('2024-01-05', () => expect(getWeekStart('2024-01-05')).toBe('2024-01-01'));
  test('2024-01-06', () => expect(getWeekStart('2024-01-06')).toBe('2024-01-01'));
  test('2024-01-07', () => expect(getWeekStart('2024-01-07')).toBe('2024-01-01'));

  test('2024-02-01', () => expect(getWeekStart('2024-02-01')).toBe('2024-01-29'));

});