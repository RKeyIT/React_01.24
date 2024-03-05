import { getFormattedTime } from './getFormattedTime';

describe('getFormattedTime testing', () => {
  test('Formatted zero seconds', () => {
    expect(getFormattedTime(0)).toEqual('00:00');
  });
  test('Formatted one second only', () => {
    expect(getFormattedTime(1)).toEqual('00:01');
  });
  test('Formatted seconds only', () => {
    expect(getFormattedTime(24)).toEqual('00:24');
  });
  test('Formatted time with minutes', () => {
    expect(getFormattedTime(99)).toEqual('01:39');
  });
  test('Formatted big time', () => {
    expect(getFormattedTime(6666)).toEqual('111:06');
  });
  test('Formatted negative time', () => {
    expect(getFormattedTime(-10)).toEqual('00:00');
  });
});
