import fooBar from './index';

describe('test suite', () => {
  it('1 + 1 equals 2', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('test suite2', () => {
  it('2 + 1 equals 3', () => {
    expect(2 + 1).toBe(3);
  });

  it('fooBar equals 4', () => {
    expect(fooBar()).toBe(4);
  })
});