// Import Assert
const assert = require('assert');
// Import Rooster module
const Rooster = require('../index.js');

// describe block for Rooster
describe('Rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {

      //setup: Define expected result
      const expectedRoosterCall = 'cock-a-doodle-doo!';
      
      // Exercise: Call function under test
      const actualRoosterCall = Rooster.announceDawn();
      
      // Verify: Compare actual and expected result
      assert.strictEqual(actualRoosterCall, expectedRoosterCall);
    })
  })
})