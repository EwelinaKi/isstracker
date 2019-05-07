import apiFetch from '../../src/utils/apiFetch';

const utils = require('../../src/utils/utils.js').default;

describe('validateInput function tests', () => {
  const maxVal = 120;
  const minVal = 10;

  test('Input above range', () => {
    expect(utils.validateInput('150', minVal, maxVal)).toBeFalsy();
  });
  test('Input below range', () => {
    expect(utils.validateInput('1', minVal, maxVal)).toBeFalsy();
  });
  test('Input in range', () => {
    expect(utils.validateInput('15', minVal, maxVal)).toBeTruthy();
  });
  test('Input equals min range', () => {
    expect(utils.validateInput('10', minVal, maxVal)).toBeTruthy();
  });
  test('Input equals max range', () => {
    expect(utils.validateInput('120', minVal, maxVal)).toBeTruthy();
  });
  test('Input negative number', () => {
    expect(utils.validateInput('-55', minVal, maxVal)).toBeFalsy();
  });
  test('Input with letters', () => {
    expect(utils.validateInput('1a5', minVal, maxVal)).toBeFalsy();
  });
  test('Input decimal number (comma)', () => {
    expect(utils.validateInput('14,6', minVal, maxVal)).toBeFalsy();
  });
  test('Input decimal number (point)', () => {
    expect(utils.validateInput('14.6', minVal, maxVal)).toBeFalsy();
  });
  test('Input empty', () => {
    expect(utils.validateInput('', minVal, maxVal)).toBeFalsy();
  });
  test('Input undefined', () => {
    expect(utils.validateInput(undefined, minVal, maxVal)).toBeFalsy();
  });
});

describe('getActualPositions function test', () => {
  test('return proper formatted object', () => {
    // given
    const mockSuccessResponse = { latitude: 1, longitude: 2 };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    jest.spyOn(apiFetch, 'getActualPositions').mockImplementation(() => mockJsonPromise);

    // when
    return utils.getActualPositions().then((actualPos) => {
      // then
      expect(apiFetch.getActualPositions).toHaveBeenCalledTimes(1);
      expect(actualPos).toEqual({ lat: 1, lng: 2 });
    });
  });
});

describe('getHistoryPath function test', () => {
  test('return proper formatted array', () => {
    // given
    const expected = [
      { lat: 1, lng: 2 },
      { lat: 3, lng: 4 },
      { lat: 5, lng: 5 },
    ];
    const mockSuccessResponse = [
      { latitude: 1, longitude: 2 },
      { latitude: 3, longitude: 4 },
      { latitude: 5, longitude: 5 },
    ];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    jest.spyOn(apiFetch, 'getHistoryPositions').mockImplementation(() => mockJsonPromise);

    // when
    return utils.getHistoryPath().then((actualPos) => {
      // then
      expect(apiFetch.getHistoryPositions).toHaveBeenCalledTimes(1);
      expect(actualPos).toEqual(expected);
    });
  });
});
