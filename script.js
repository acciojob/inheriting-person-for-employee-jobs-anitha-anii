// complete this js code
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};


function Employee(name, age, jobTitle) {
Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

let person1 = new Person("harsha", 30);
person1.greet(); 

let employee1 = new Employee("Anitha", 25, "Engineer");
employee1.greet(); 
employee1.jobGreet(); 

	
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
