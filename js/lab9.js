/**
 * WAP Lab 9 Assignment Inheritance and JQuery
 */
  "use strict";
const person = {name: "",
                dateOfBirth: "",
                getName: function () {
                         return this.name;},
               setName: function (name) {
                       this.name = name;
               },
              toString : function () {
                      return '\"The person\'s name is ' + this.name + '\"'+ '\n' + '\"'+this.name + ' was born on ' + this.dateOfBirth+'\"';
              }
};

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = "1998-12-10";
console.log(john.toString());

//Q2 Option one
const  empl = Object.create(person);
empl.setName("Anna");
empl.salary = 249995.50;
empl.hireDate = new Date();
empl.doJob = function (jobTitle) {
    let formattedSalary = '$' + this.salary.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    console.log(this.getName() +" is a "+jobTitle + " who earns "+formattedSalary);
}

empl.doJob("Programmer");


//Q2 option 2
const employee = {salary: 0,
                  hireDate: new Date(),
                  __proto__ : person,
               doJob : function (jobTitle) {
                       let formattedSalary = '$' + this.salary.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                      console.log(this.getName() +" is a "+jobTitle + " who earns "+formattedSalary);
               }
};

let employee1 = Object.create(employee);
employee1.setName("Anna");
employee1.salary = Number(249995.50);
employee1.doJob("Programmer");

//Q3

class  Person {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    toString(){
        return '{Name:'+this.name +",DateOfBirth:" + this.dateOfBirth+'}';
    }
}

let peter = new Person("Peter", "1985-11-10");
console.log(peter.toString());