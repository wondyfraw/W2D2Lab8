/**
 * Created by W.Hailu
 * My Js file for Module,Inheritance and Object
 */

"use Strict"
//Q6

const count = (function () {
    var counter =0;
    let age = 0;
    const add = function () {
        counter +=1;
    };

    const reset = function () {
        counter =0;
    };

    const getCounter = function () {
        return counter;
    };


    return{
        add : add,
        reset : reset,
        getCounter : getCounter,
    }
})();

count.add();
count.add();
console.log(count.getCounter());
count.reset();

//Q8
const count2 = (function () {
    var counter =0;
    let age = 0;
    const add = function (val) {
        counter +=val;
    };

    const reset = function () {
        counter =0;
    };

    const getCounter = function () {
        return counter;
    };

    //const make_adder = function (inc) {
    //     counter +=inc;
    //}

    return{
        add : add,
        reset : reset,
        getCounter : getCounter,
        make_adder : function (val) {
            add(val);
        }
    }
})();

count2.make_adder(5);
count2.make_adder(5);
count2.make_adder(5);
console.log("Counter5 = "+ count2.getCounter());
count2.reset();

//Q10
const employee = (function () {
    let newName = " ";
    let newAge = 0;
    let newSalary = 0.0;

    const  setNewName = function (newName) {
        this.newName = newName;
    }
    const getNewName = function () {
        return this.newName;
    }

    const setNewAge = function (newAge) {
        this.newAge = newAge;
    }

    const  getNewAge = function () {
        return  this.newAge;
    }

    const setNewSalary = function (newSalary) {
        this.newSalary = newSalary;
    }

    const getNewSalary = function () {
        return this.newSalary;
    }

    const EmployeeDetail = function () {
        return '{Name :' + this.newName + ',Age : '+ this.newAge + ' ,Salary :'
            +this.newSalary +'}';
    }
    return{
        setNewName : setNewName,
        getNewName : getNewName,
        setNewAge :  setNewAge,
        getNewAge : getNewAge,
        setNewSalary : setNewSalary,
        getNewSalary : getNewSalary,
        EmployeeDetail : EmployeeDetail,
    }
})();


//Q11
//Expand the module by adding Address field ,setAddress and getAddress method
const employee2 = (function () {
    let newName = " ";
    let newAge = 0;
    let newSalary = 0.0;
    let newAddress ="";

    const  setNewName = function (newName) {
        this.newName = newName;
    }
    const getNewName = function () {
        return this.newName;
    }

    const setNewAge = function (newAge) {
        this.newAge = newAge;
    }

    const  getNewAge = function () {
        return  this.newAge;
    }

    const setNewSalary = function (newSalary) {
        this.newSalary = newSalary;
    }

    const getNewSalary = function () {
        return this.newSalary;
    }

    const setAddress = function (newAddress) {
        this.newAddress = newAddress;
    }

    const getAddress = function () {
        return this.newAddress;
    }

    const address = function () {
        return this.newAddress;
    }
    const EmployeeDetail = function () {
        return '{Name :' + this.newName + ',Age : '+ this.newAge + ' ,Salary :'
            +this.newSalary + ' Adreess :' +this.newAddress +'}';
    }
    return{
        setNewName : setNewName,
        getNewName : getNewName,
        setNewAge :  setNewAge,
        getNewAge : getNewAge,
        setNewSalary : setNewSalary,
        getNewSalary : getNewSalary,
        EmployeeDetail : EmployeeDetail,
        setAddress : setAddress,
        getAddress : getAddress,
        address : address
    }
})();

employee2.setNewName("Wonde");
employee2.setNewAge(20);
employee2.setNewSalary(2000);
employee2.setAddress("North 1000 Stress Fair Field Iowa");
console.log(employee2.EmployeeDetail());