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
  
  // Test for time at dawn
  describe('timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup: Define expected result
      const expectedTime = '4';
      // Exercise: Call function under test
      const actualTime = Rooster.timeAtDawn(4);
      // Verify: Compare actual and expected result
      assert.strictEqual(actualTime, expectedTime);
    })
  })
})