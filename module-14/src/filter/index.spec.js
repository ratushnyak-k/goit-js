import filter from './index';

describe('filter', () => {
  describe('when array is empty', () => {
    it('should return new empty array', () => {
      const arr = [];
      const result = filter(arr, () => {});
      expect(arr !== result).toBeTruthy();
    });
  });

  describe('when array is not empty', () => {
    it('should return new array with filtered data', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter(arr, (item) => {
        return item > 3;
      });
      expect(result).toEqual([4, 5]);
    });
  });
});
