// Task 1

let testVariable1 = [1, 2, 3];
let testVariable2 = "Hello, world!";

console.log(Array.isArray(testVariable1));
console.log(Array.isArray(testVariable2));

// Task 2

let testArrey = [1, 2, 3, 4, 5];

console.log(testArrey[0]); // or testArrey.at(0);

//Task 3

let testArrey1 = [1, 2, 3, 4, 5];

console.log(testArrey.at(-1));

// Task 4

const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const o = ["th", "st", "nd", "rd"];

console.log(
  `1${o[1]} choice is ${color[0]}\n2${o[2]} choice is ${color[1]}\n3${o[3]} choice is ${color[2]}`
);


// Task 5


let student = {
    sakheli: "Mate",
    gvari: "Gotua",
    asaki: 20
};

console.log(student);

// მონაცემის დამატება
student.simagle = 1.90;
console.log( student);

//მონაცემის წაშლა
delete student.asaki;
console.log(student);

//მონაცემის ჩანაცვლება
student.sakheli = "tazo";
console.log( student);

