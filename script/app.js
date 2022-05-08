function randomArrayGenerator(num1, num2) {
  const mas = [];
  for (let i = 0; i < num1; i++) {
    mas[i] = Math.floor(Math.random() * (num2 - 0 + 1)) + 0;
  }
  return mas;
}
console.log(randomArrayGenerator(10, 5));

function arraySplicer(arr, str) {
  const mas = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== str) {
      mas[j] = arr[i];
      j++;
    }
  }
  return mas;
}
let firstArray = ["sex", "drugs", "rock and roll"];
let secondArray = ["egalite", "fraternite", "liberte"];
let thirdArray = ["Patria", "o", "muerte"];
console.log(arraySplicer(firstArray, "drugs"));
console.log(arraySplicer(secondArray, "mort"));
console.log(arraySplicer(thirdArray, "muerte"));

function inputArr(arr) {
  console.log(arr);
  const mas = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
    if (arr[i][0] === "{" && arr[i][arr[i].length - 1] === "}") {
      mas[i] = strInObj(arr[i]);
    } else {
      try {
        mas[i] = JSON.parse(arr[i]);
      } catch {
        mas[i] = arr[i];
      }
    }
  }
  return mas;
}

function strInObj(str) {
  const arr = str.split(",");
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const mas = arr[i].replace(/{|}/, "").split(":");
    if (mas[1] === undefined) {
      obj[mas[0].trim()] = null;
    } else {
      obj[mas[0].trim()] = mas[1];
    }
  }
  return obj;
}
let arr3 = [
  "[1,2,112]",
  "null",
  "{name:Moby, surName:Dick, age:42}",
  "true",
  "fghjk",
  "42",
  "{dsfghjkjhjhg dfgfhgjhk}",
];
console.log(inputArr(arr3));

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
    isFrictionalCharacter: false,
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
  for (let i = 0; i < arr.length; i++) {
    const obj = {};
    arr[i].name === undefined ? (obj.name = null) : (obj.name = arr[i].name);
    arr[i].surname === undefined
      ? (obj.surname = null)
      : (obj.surname = arr[i].surname);
    arr[i].age === undefined ? (obj.age = null) : (obj.age = arr[i].age);
    mas[i] = obj;
  }
  return mas.sort((a, b) => (a.surname > b.surname ? 1 : -1));
}
console.log(nameSurnameAge(arrayOfPersons));

function sortByAge(arr) {
  const mas = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < mas.length; i++) {
    if (mas[i].age === undefined) {
      mas[i].age = null;
    }
  }
  return mas.sort((a, b) => (a.age > b.age ? 1 : -1));
}
console.log(sortByAge(arrayOfPersons));

function zodiac(arr) {
  const mas = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let key in arr[i]) {
      if (key === "zodiacSign") {
        flag = true;
      }
    }
    if (flag) {
      mas[j++] = arr[i];
    }
  }
  return mas;
}
console.log(zodiac(arrayOfPersons));

function sortByObj(arr) {
  const mas1 = [];
  const mas2 = [];
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let key in arr[i]) {
      if (typeof arr[i][key] === "object") {
        flag = true;
      }
    }
    if (flag) {
      mas1[j++] = arr[i];
    } else {
      mas2[k++] = arr[i];
    }
  }
  return [...mas1, ...mas2];
}

console.log(sortByObj(arrayOfPersons));

function randomNumGenerator(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

function idObj(arr) {
  const numbers = [];
  const mas = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < arr.length; i++) {
    let reg;
    let id;
    do {
      id = randomNumGenerator(100, 999);
      reg = new RegExp(id, "gi");
    } while (reg.test(numbers));
    numbers[i] = id;
    mas[i].id = id;
  }
  return mas;
}
console.log(idObj(arrayOfPersons));

function fictional(arr) {
  let mas = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isFictionalCharacter === true) {
      mas[j] = arr[i];
      mas[j++].fictionalUniverse = null;
    }
  }
  return mas;
}
console.log(fictional(arrayOfPersons));
