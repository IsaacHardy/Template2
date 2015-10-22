import something from '../js/something_to_test';

describe('Something to something_to_test', function() {
  describe('sum', function() {
    it('should calc sum of all args', function() {
      expect(something.sum(2,3,4)).to.equal(9);
    });
  });
});
