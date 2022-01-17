# Test run after writing test
$ npm test

> learn-mocha-intro-start@1.0.0 test /home/ccuser/workspace/learn-mocha-learn-mocha-rooster-regulation
> mocha test/**/*_test.js



  Rooster
    announceDawn
      1) returns a rooster call


  0 passing (7ms)
  1 failing

  1) Rooster announceDawn returns a rooster call:

      AssertionError: 'moo!' === 'cock-a-doodle-doo!'
      + expected - actual

      -moo!
      +cock-a-doodle-doo!
      
      at Context.it (test/index_test.js:15:14)



npm ERR! Test failed.  See above for more details.

# Test run after correcting error
$ npm test

> learn-mocha-intro-start@1.0.0 test /home/ccuser/workspace/learn-mocha-learn-mocha-rooster-regulation
> mocha test/**/*_test.js



  Rooster
    announceDawn
      ✓ returns a rooster call


  1 passing (6ms)
