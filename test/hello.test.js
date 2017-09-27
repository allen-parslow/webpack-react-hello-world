const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 3)).toBe(3);
  });

  test('spy', () => {
    var spy = jasmine.createSpy('spy');
    spy();
    expect(spy).toHaveBeenCalled();
  });
  