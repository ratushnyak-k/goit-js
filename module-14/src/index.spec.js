import index from './index';

describe('index', () => {
  it('should return correct object', () => {
    expect(index).toEqual({
      filter: expect.any(Function),
      map: expect.any(Function),
    });
  });
});
