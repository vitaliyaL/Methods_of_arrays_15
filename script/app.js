function randomArrayGenerator(num1, num2) {
  const mas = [...Array(num1)].map((i) => 0);
  return mas.map((i) => {
    i = Math.round(Math.random() * num2);
    return i;
  });
}
console.log(randomArrayGenerator(10, 5));

function arraySplicer(arr, str) {
  return arr.filter((i) => i !== str);
}
let firstArray = ["sex", "drugs", "rock and roll"];
let secondArray = ["egalite", "fraternite", "liberte"];
let thirdArray = ["Patria", "o", "muerte"];
console.log(arraySplicer(firstArray, "drugs"));
console.log(arraySplicer(secondArray, "mort"));
console.log(arraySplicer(thirdArray, "muerte"));

function inputArr(arr) {
  const mas = [];
  arr.map((i, index) => {
    i = i.trim();
    if (i[0] === "{" && i[i.length - 1] === "}") {
      mas[index] = strInObj(i);
    } else {
      try {
        mas[index] = JSON.parse(i);
      } catch {
        mas[index] = i;
      }
    }
  });
  return mas;
}

function strInObj(str) {
  const obj = {};
  const arr = str.split(",").map((i) => {
    const mas = i.replace(/{|}/, "").split(":");
    mas[1] === undefined
      ? (obj[mas[0].trim()] = null)
      : (obj[mas[0].trim()] = mas[1]);
  });
  return obj;
}
let arr = [
  "[1,2,112]",
  "null",
  "{name:Moby, surName:Dick, age:42}",
  "true",
  "fghjk",
  "42",
  "{dsfghjkjhjhg dfgfhgjhk}",
];
console.log(inputArr(arr));

const arrayOfPersons = [
  {
    name: "Ferdinant",
    surname: "Foch",
    age: 54,
    nationality: "French",
    skill: "Military management",
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: "Jackson",
    surname: "Bricks",
    age: 20,
    nationality: "USA",
    skill: "farmer",
    height: 187,
    specialTrait: "mechanical arms",
    isFictionalCharacter: true,
  },
  {
    name: "Hideo",
    surname: "Kozima",
    age: 56,
    nationality: "USA",
    skill: "game developer",
    height: 173,
    specialTrait: "genius",
    actualGames: ["Death Stranding", "Metal Gear"],
    isAlive: true,
  },
  {
    name: "Kim",
    surname: "Kardashian",
    age: 39,
    nationality: "USA",
    skill: "model",
    height: 159,
    zodiacSign: "scorpio",
  },
  {
    name: "Mia",
    surname: "Khalifa",
    age: 27,
    nationality: "Lebanon",
    skill: "actress",
    height: 157,
    zodiacSign: "saggitarius",
    specialTrait: "very exspressionable",
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: "Herman",
    surname: "Hesse",
    age: 85,
    nationality: "Germany",
    skill: "writer",
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
  },
  {
    name: "Fedor",
    surname: "Dostoevsky",
    age: 60,
    nationality: "Russia",
    skill: "writer",
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
  },
  {
    name: "Doomguy",
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: "demon slayer",
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Angry a bit",
  },
  {
    name: "Bruce",
    surname: "Wayne",
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: "Sonic",
    surname: "The Hedgehog",
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Fast as f#@k",
  },
  {
    name: "Ella",
    surname: "Fitzgerald",
    age: 79,
    isFictionalCharacter: false,
    isAlive: false,
    specialTrait: "Amazing voice",
    signatureSongs: [
      "Cry Me a river",
      "Hello Dolly",
      "Summertime",
      "In a sentimental mood",
    ],
  },
];
function nameSurnameAge(arr) {
  const mas = [];
  arr.map((i, index) => {
    const obj = {};
    i.name === undefined ? (obj.name = null) : (obj.name = i.name);
    i.surname === undefined ? (obj.surname = null) : (obj.surname = i.surname);
    i.age === undefined ? (obj.age = null) : (obj.age = i.age);
    mas[index] = obj;
  });
  return mas.sort((a, b) => (a.surname > b.surname ? 1 : -1));
}
console.log(nameSurnameAge(arrayOfPersons));

function eightProp(arr) {
  return arr
    .filter((i) => Object.keys(i).length >= 8)
    .sort((a, b) => (Object.keys(a).length < Object.keys(b).length ? 1 : -1));
}
console.log(eightProp(arrayOfPersons));

function sortByAge(mas) {
  const arr = JSON.parse(JSON.stringify(mas));
  return arr
    .map((i) => {
      if (i.age === undefined) i.age = null;
      return i;
    })
    .sort((a, b) => (a.age > b.age ? 1 : -1));
}
console.log(sortByAge(arrayOfPersons));

function zodiac(arr) {
  return arr.filter((i) => i.hasOwnProperty("zodiacSign"));
}
console.log(zodiac(arrayOfPersons));

function sortByObj(arr) {
  return [
    ...arr.filter((i) =>
      Object.values(i)
        .map((i) => typeof i)
        .includes("object")
    ),
    ...arr.filter(
      (i) =>
        !Object.values(i)
          .map((i) => typeof i)
          .includes("object")
    ),
  ];
}
console.log(sortByObj(arrayOfPersons));

function randomNumGenerator(num1, num2) {
  return Math.round(Math.random() * (num2 - num1)) + num1;
}

function idObj(arr) {
  const numbers = [];
  let id;
  const mas = JSON.parse(JSON.stringify(arr));
  return mas.map((i, index) => {
    do {
      id = randomNumGenerator(100, 999);
    } while (numbers.includes(id));
    numbers[index] = id;
    i.id = id;
    return i;
  });
}
console.log(idObj(arrayOfPersons));

function fictional(mas) {
  const arr=JSON.parse(JSON.stringify(mas));
  return arr.filter((i) => i.isFictionalCharacter).map((i)=>{ 
    i.fictionalUniverse = null
    return i;
  });
}
console.log(fictional(arrayOfPersons));
