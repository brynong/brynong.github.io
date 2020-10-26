class Information {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

let person1 = new Information('ABC', 12, 123);
let person2 = new Information('ACC', 124, 1453);
let person3 = new Information('AGC', 1224, 14453);

const hello = [person1, person2, person3];
const byebye = [person1];

//lee & m is just a variable that is replaceable. We determine what is lee & m when we call for the function with array name in ()

function printPeopleInformation(lee) {
    for (let m of lee) {
        retrieveInformation(m)
    }
}

function retrieveInformation(m) {
    console.log(m.name + ',' + m.age + ',' + m.height)
}

printPeopleInformation(hello);

console.log();
console.log();
console.log();

printPeopleInformation(byebye);