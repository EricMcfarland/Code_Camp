//I dont fully understand closures
function Dog() {};
function Person(firstAndLast) {
    var firstAndLast = firstAndLast;
    var names = firstAndLast.split(" ");
    var first = names[0];
    var last = names[names.length - 1];



    this.getFirstName = function() {
        return first
    };

    this.getLastName = function() {
        return last
    };

    this.getFullName = function() {
        return first + " " + last
    };

    this.setFirstName = function (newFirst) {
        first = newFirst;
    };
    this.setLastName = function (newLast) {
        last = newLast;
    };
    this. setFullName = function (newName) {
        newName = newName.split(" ");
        first = newName[0];
        last = newName[names.length - 1];
        firstAndLast = first + " " + last;
    }

};
var spot = new Dog();
console.log("is dog?")
console.log(spot)
console.log(spot instanceof Dog);
var me = new Person("Bob Ross");
console.log(me);
me.setFirstName("BuB");
console.log(me.getFirstName());
console.log(Object.keys(me).length);
console.log(me instanceof Person);