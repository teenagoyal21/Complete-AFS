interface User {   //similar to object
    username: string,
    age: number
}

let user: User = {
    username: "Teena",
    age: 19
}

console.log(user.username)
// user.age = "45" -->//error as number typed cant be assigned string 

let num: number[] = [1,2,3,4] //cant put any other datatype element
num[3] = 21

let words: string[] = ["teena", "goyal"]

//numbers and string allowed but not boolean
let numstr: number[] | string[] = [];
numstr[0] = 1;
numstr[1] = "teena";
console.log(numstr[4]); //undefined (size not required)

interface Emp {
    id: number,
    ename: string,
    salary: number,
    dept: string,
    getName(): string,
    getsalary(): number,
}

let emp: Emp = {
    id: 1,
    ename: "teena",
    salary: 8264364152,
    dept: "it",
    getName: function() {
        return this.ename
    },
    getsalary: function() {
        return this.salary
    }
}

let emp2: Emp = {
    id: 3,
    ename: "kaku",
    salary: 9056436654,
    dept: "it",
    getName: function() {
        return this.ename
    },
    getsalary: function() {
        return this.salary
    }
}

function empname(em: Emp){
    return em.getName()
}

console.log(emp.getName());
console.log(empname(emp));

//array of object
let empArr: Emp[] = [emp, emp2];
console.log(empArr[1])


interface userData {
    id: number,
    password: string, 
    email: string
}

let user1: userData = {
    id: 1,
    password: "teenaoyal",
    email: "teena@gmail.com"
}

let userDataArr : userData[] = [user1, {
    id: 1,
    password: "heyey",
    email: "heyeey2@gmail.com"
}, {
    id: 3,
    email: "jauuhs@gmail.com",
    password: "jaauhs"
}]

console.log(userDataArr[2])

// OR |

let some: number | string;

let arr2: number[] | string[] = ["sfsf", "jahdhdh"] //either only string array or only number array
let arr3: (number|string)[] = [1,"343"];