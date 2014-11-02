var Person = (function () {

  const AGE_LIMIT = 77;

  function makeOlder () {
    var newAge = this.getAge() + 1;
    this.setAge( newAge );
    return newAge;
  }

  function dieAlert () {
    console.info(this.dieMessage + '. At age: ' + this.getAge());
  }

  function aliveAlert () {
    console.info(this.aliveMessage + '. At age: ' + this.getAge());
  }

  function Person (name, age) {

    var _name,
        _age,
        __proto__ = Person.prototype
    ;

    _name = name;
    _age  = age;

    var log = function () {
      console.log('Name:',_name);
    }.bind(this);

    this.aliveMessage = 'You are alive!';

    this.isDied = function () {
      if ( AGE_LIMIT <= _age ) {
        dieAlert.call(this);
        return true;
      } else {
        aliveAlert.call(this);
        return false;
      }
    }

    this.birthday = function () {
      return makeOlder.call(this);
    }

    __proto__.setAge  = function (age)  { _age = age; }
    __proto__.setName = function (name) { _name = name; }

    __proto__.getName = function () { return _name; }
    __proto__.getAge  = function () { return _age; }
  }

  Person.prototype.dieMessage   = "You are died!";

  Person.prototype.makeHappy = function() {
    var HAPPY_MESSAGE = "I'm happy :) !";
    console.log(HAPPY_MESSAGE);
    return HAPPY_MESSAGE;
  }

  Person.staticVariable = 'some value';

  Person.alert = function (message) {
    alert(message);
  }

  return Person;
})();

module.exports = Person;
