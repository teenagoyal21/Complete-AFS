"use strict";
let user = {
    username: "Teena",
    age: 19
};
console.log(user.username);
// user.age = "45" -->//error as number typed cant be assigned string 
let num = [1, 2, 3, 4]; //cant put any other datatype element
num[3] = 21;
let words = ["teena", "goyal"];
//numbers and string allowed but not boolean
let numstr = [];
numstr[0] = 1;
numstr[1] = "teena";
console.log(numstr[4]); //undefined (size not required)
let emp = {
    id: 1,
    ename: "teena",
    salary: 8264364152,
    dept: "it",
    getName: function () {
        return this.ename;
    },
    getsalary: function () {
        return this.salary;
    }
};
let emp2 = {
    id: 3,
    ename: "kaku",
    salary: 9056436654,
    dept: "it",
    getName: function () {
        return this.ename;
    },
    getsalary: function () {
        return this.salary;
    }
};
function empname(em) {
    return em.getName();
}
console.log(emp.getName());
console.log(empname(emp));
//array of object
let empArr = [emp, emp2];
console.log(empArr[1]);
let user1 = {
    id: 1,
    password: "teenaoyal",
    email: "teena@gmail.com"
};
let userDataArr = [user1, {
        id: 1,
        password: "heyey",
        email: "heyeey2@gmail.com"
    }, {
        id: 3,
        email: "jauuhs@gmail.com",
        password: "jaauhs"
    }];
console.log(userDataArr[2]);
// OR |
let some;
let arr2 = ["sfsf", "jahdhdh"]; //either only string array or only number array
let arr3 = [1, "343"];
