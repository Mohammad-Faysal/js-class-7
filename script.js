const odd = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(odd);
const even = [2, 4, 6, 8];
console.log(even);
console.log(even.length);
console.log(even[even.length - 2]);
console.log(odd[2]);
console.log(even[5]);
odd[3] = 70;
console.log(odd);
const num1 = [1, 2, 50, 60];
console.log(num1);
num1.push(25);
num1.unshift(62);
console.log(num1);
num1.pop();
num1.shift();
console.log(num1);
//objects

const computer = {
  processor: "intel core 19",
  clockspeed: "4.2 GHz",
  ram: "16gb",
  mainFanSpeedInRPH: 1800,
  hasSSD: true,
  price: 85000,
};

console.log(computer);
console.log(computer.hasSSD);

const student = {
  firstName: "faisal",
  lastName: "reyad",
  birthyear: 1996,
  calcAge: function () {
    return 2022 - this.birthyear;
  },
  greetings: function () {
    return `hello ${this.firstName}`;
  },
};

console.log(student.calcAge());
console.log(student.greetings());

//for loop

for (let i = 1; i <= 20; i++) {
  //console.log(1);
}

/*for (let i = 10; i <= 1000; i += 10) {
  console.log(i);
}*/

const faisalArray = [
  "faisal",
  "Reyad",
  "iMac",
  "MacOS",
  "iohone 16",
  "Proggrammar",
  2022 - 1999,
  ["ami, my, me, amr"],
  true,
  "dancer",
];
console.log(faisalArray);

for (let i = 0; i < faisalArray.length; i++) {
  console.log(faisalArray[i]);
}

const evenNumbers = [10, 21, 45, 78, 50, 65];
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
  sum = sum + evenNumbers[i];
}
console.log(sum);
const arr = [10, true, "a", "b", false, 55, true, "x"];
console.log(arr);

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(typeof arr[i]);
}
console.log(arr2);

const years = [1994, 1996, 1998, 2001, 1993, 1995];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages);

//continue and break

for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") continue;
  console.log(arr[i], typeof arr[i]);
}
/*for (i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") break;
  console.log(arr[i], typeof arr[i]);
}*/

// loop inside a loop

for (let i = 1; i <= 10; i++) {
  console.log(`step-------${i}`);
  for (let j = 1; j <= i; j++) {
    console.log(`run -------${j}`);
  }
}

//star pattern
let n = 10;
let star = "";
for (let i = 1; i <= 10; i += 2) {
  for (let j = 1; j <= n; j += 2) {
    star += "*";
  }
  star += "\n";
}

console.log(star);

//while loop

let x = 1;
while (x <= 100) {
  console.log(x);
  x += 5;
}
