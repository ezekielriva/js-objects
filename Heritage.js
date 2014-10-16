var Mammal = (function () {

  function Mammal () {
    var __proto__ = Mammal.prototype;

    __proto__.breathe = function () {
      console.log("inhale and exhale");
    };

    __proto__.toString = function () {
      return "[object Mammal]";
    }

  };

  return Mammal;
})();

var Cat = (function (Mammal) {

  function Cat () {
    Mammal.call(this);

    var __proto__ = Cat.prototype;

    __proto__.speak = function () {
      console.log('Meow');
    };

    __proto__.toString = function () {
      return "[object Cat]";
    };
  };

  Cat.prototype = Object.create(Mammal.prototype);

  return Cat;
})(Mammal);

var Dog = (function (Mammal) {

  function Dog (breed) {
    Mammal.call(this);

    var __proto__ = Dog.prototype,
        _breed
    ;

    _breed = breed;

    __proto__.toString = function () {
      return "[object Dog] < " + Mammal.prototype.toString();
    };

  };

  Dog.prototype = Object.create(Mammal.prototype);

  return Dog;
})(Mammal);
