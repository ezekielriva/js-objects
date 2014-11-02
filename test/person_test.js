var expect      = require('expect.js'),
    PersonClass = require('../Object')
;

describe('Person', function () {
  describe('Constructor', function () {
    it('should construct a Person with name and age', function () {
      var person = new PersonClass('Jhon Due', 24);
      expect( person.getName() ).to.be('Jhon Due');
      expect( person.getAge() ).to.be(24);
    });
  });

  describe('getter and setters', function () {
    var person = new PersonClass('Jhon Due', 24);

    it('#getName()', function () {
      expect( person.getName() ).to.be('Jhon Due');
    });

    it('#getAge()', function () {
      expect( person.getAge() ).to.be(24);
    });

    it('#setName()', function () {
      person.setName('Due Jhon');
      expect( person.getName() ).to.be('Due Jhon');
    });

    it('#setAge()', function () {
      person.setAge(30);
      expect( person.getAge() ).to.be(30);
    });
  });

  describe('privileged methods', function () {

    it('#isDied() should be false if Person age is lower than AGE_LIMIT[77]', function () {
      var person = new PersonClass('Jhon Due', 24);
      expect( person.isDied() ).to.be(false);
    });

    it('#isDied() should be true if Person age is higher than AGE_LIMIT[77]', function () {
      var person = new PersonClass('Jhon Due', 99);
      expect( person.isDied() ).to.be(true);
    });

    it('#brithday()', function () {
      var person = new PersonClass('Jhon Due', 24);
      expect( person.birthday() ).to.be(25);
    });
  });

  describe('public methods', function () {
    it('#makeHappy() should return happy message', function () {
      var person = new PersonClass();
      expect( person.makeHappy() ).to.be("I'm happy :) !");
    })
  });

  describe('public variables', function () {
    var person = new PersonClass();

    it('.dieMessage should return it message', function () {
      expect( person.dieMessage ).to.be("You are died!");
    });
  });

  describe('privileged variables', function () {
    var person = new PersonClass();

    it('.dieMessage should return it message', function () {
      expect( person.aliveMessage ).to.be('You are alive!');
    });
  });

  describe('static variables', function () {
    it('.staticVariable should return it message', function () {
      expect( PersonClass.staticVariable ).to.be('some value');
    })
  });
})
