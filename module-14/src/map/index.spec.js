import map from '.';

describe('map', () => {
  describe('when arr is empty', () => {
    it('should return new array', () => {
      const arr = [];
      expect(map(arr, () => {}) !== arr).toBeTruthy();
    });
  });

  describe('when arr is not empty', () => {
    it('should call passed handler', () => {
      const arr = [1, 2, 3, 4, 5, 6];
      const handler = jest.fn();
      map(arr, handler);
      expect(handler).toHaveBeenCalledTimes(arr.length);
    });

    it('should return changed array', () => {
      const arr = [1, 2, 3, 4, 5];
      const modificator = 5;
      const result = arr.map((i) => i + modificator);
      expect(map(arr, (i) => i + modificator)).toEqual(result);
    });
  });
});
